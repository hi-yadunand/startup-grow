require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { connectDatabase, getDatabaseStatus, isDatabaseConnected } = require("./db");
const ServiceRequest = require("./models/ServiceRequest");
const ContactLead = require("./models/ContactLead");

const app = express();
const port = Number(process.env.PORT) || 4000;
const allowedOrigins = getAllowedOrigins();

const validStatuses = ["New", "Contacted", "In progress", "Closed"];
const memoryRequests = [];
const memoryLeads = [];

const services = [
  "Search Engine Optimisation",
  "Pay-Per-Click Advertising (PPC)",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Web Design & Development"
];

function cleanEnv(value) {
  return String(value || "").trim().replace(/^["']|["']$/g, "");
}

function getAllowedOrigins() {
  const origins = cleanEnv(process.env.CLIENT_ORIGIN || "http://localhost:3000")
    .split(",")
    .map((origin) => origin.trim().replace(/\/$/, ""))
    .filter(Boolean);

  return new Set(origins);
}

function isAllowedOrigin(origin) {
  if (!origin) {
    return true;
  }

  const cleanOrigin = origin.replace(/\/$/, "");

  if (allowedOrigins.has(cleanOrigin)) {
    return true;
  }

  return /^https:\/\/startup-grow-[a-z0-9-]+-yadunand-pavithrans-projects\.vercel\.app$/i.test(cleanOrigin);
}

app.get("/api/health", async (request, response) => {
  await connectDatabase();
  const database = getDatabaseStatus();

  response.json({
    status: "ok",
    database: database.connected ? "mongodb" : "memory",
    databaseError: database.connected ? undefined : database.lastError
  });
});

app.use(
  cors({
    origin(origin, callback) {
      if (isAllowedOrigin(origin)) {
        return callback(null, true);
      }

      return callback(null, false);
    },
    credentials: true
  })
);
app.use(express.json({ limit: "1mb" }));

function cleanString(value) {
  return String(value || "").trim();
}

function formatRequest(request) {
  return {
    id: String(request._id || request.id),
    startupName: request.startupName,
    founderName: request.founderName,
    email: request.email,
    phone: request.phone,
    city: request.city,
    stage: request.stage,
    service: request.service,
    budget: request.budget,
    message: request.message,
    status: request.status,
    createdAt: request.createdAt
  };
}

function validateRequest(body) {
  const payload = {
    startupName: cleanString(body.startupName),
    founderName: cleanString(body.founderName),
    email: cleanString(body.email).toLowerCase(),
    phone: cleanString(body.phone),
    city: cleanString(body.city),
    stage: cleanString(body.stage),
    service: cleanString(body.service),
    budget: cleanString(body.budget),
    message: cleanString(body.message)
  };

  const missingFields = Object.entries(payload)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingFields.length) {
    return {
      error: `Missing required fields: ${missingFields.join(", ")}`
    };
  }

  if (!payload.email.includes("@")) {
    return {
      error: "Please provide a valid email address."
    };
  }

  if (!services.includes(payload.service)) {
    return {
      error: "Please select a valid service."
    };
  }

  return { payload };
}

function formatLead(lead) {
  return {
    id: String(lead._id || lead.id),
    name: lead.name,
    email: lead.email,
    phone: lead.phone,
    subject: lead.subject,
    service: lead.service,
    message: lead.message,
    status: lead.status,
    createdAt: lead.createdAt
  };
}

function validateLead(body) {
  const payload = {
    name: cleanString(body.name),
    email: cleanString(body.email).toLowerCase(),
    phone: cleanString(body.phone),
    subject: cleanString(body.subject),
    service: cleanString(body.service),
    message: cleanString(body.message)
  };

  const missingFields = Object.entries(payload)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingFields.length) {
    return {
      error: `Missing required fields: ${missingFields.join(", ")}`
    };
  }

  if (!payload.email.includes("@")) {
    return {
      error: "Please provide a valid email address."
    };
  }

  if (!services.includes(payload.service)) {
    return {
      error: "Please select a valid service."
    };
  }

  return { payload };
}

app.get("/api/services", (request, response) => {
  response.json({ data: services });
});

app.post("/api/leads", async (request, response) => {
  const validation = validateLead(request.body);

  if (validation.error) {
    return response.status(400).json({ message: validation.error });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const created = await ContactLead.create(validation.payload);
      return response.status(201).json({ data: formatLead(created) });
    }

    const created = {
      id: `mem_lead_${Date.now()}`,
      ...validation.payload,
      status: "New",
      createdAt: new Date().toISOString()
    };
    memoryLeads.unshift(created);

    return response.status(201).json({ data: formatLead(created) });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Unable to create contact lead." });
  }
});

app.get("/api/leads", async (request, response) => {
  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const leads = await ContactLead.find().sort({ createdAt: -1 }).limit(50);
      return response.json({ data: leads.map(formatLead) });
    }

    return response.json({ data: memoryLeads.slice(0, 50).map(formatLead) });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Unable to load contact leads." });
  }
});

app.patch("/api/leads/:id/status", async (request, response) => {
  const status = cleanString(request.body.status);

  if (!validStatuses.includes(status)) {
    return response.status(400).json({ message: "Invalid status." });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const updated = await ContactLead.findByIdAndUpdate(
        request.params.id,
        { status },
        { new: true }
      );

      if (!updated) {
        return response.status(404).json({ message: "Lead not found." });
      }

      return response.json({ data: formatLead(updated) });
    }

    const index = memoryLeads.findIndex((item) => item.id === request.params.id);

    if (index === -1) {
      return response.status(404).json({ message: "Lead not found." });
    }

    memoryLeads[index] = {
      ...memoryLeads[index],
      status
    };

    return response.json({ data: formatLead(memoryLeads[index]) });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Unable to update lead status." });
  }
});

app.post("/api/requests", async (request, response) => {
  const validation = validateRequest(request.body);

  if (validation.error) {
    return response.status(400).json({ message: validation.error });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const created = await ServiceRequest.create(validation.payload);
      return response.status(201).json({ data: formatRequest(created) });
    }

    const created = {
      id: `mem_${Date.now()}`,
      ...validation.payload,
      status: "New",
      createdAt: new Date().toISOString()
    };
    memoryRequests.unshift(created);

    return response.status(201).json({ data: formatRequest(created) });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Unable to create service request." });
  }
});

app.get("/api/requests", async (request, response) => {
  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const requests = await ServiceRequest.find().sort({ createdAt: -1 }).limit(50);
      return response.json({ data: requests.map(formatRequest) });
    }

    return response.json({ data: memoryRequests.slice(0, 50).map(formatRequest) });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Unable to load service requests." });
  }
});

app.patch("/api/requests/:id/status", async (request, response) => {
  const status = cleanString(request.body.status);

  if (!validStatuses.includes(status)) {
    return response.status(400).json({ message: "Invalid status." });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const updated = await ServiceRequest.findByIdAndUpdate(
        request.params.id,
        { status },
        { new: true }
      );

      if (!updated) {
        return response.status(404).json({ message: "Request not found." });
      }

      return response.json({ data: formatRequest(updated) });
    }

    const index = memoryRequests.findIndex((item) => item.id === request.params.id);

    if (index === -1) {
      return response.status(404).json({ message: "Request not found." });
    }

    memoryRequests[index] = {
      ...memoryRequests[index],
      status
    };

    return response.json({ data: formatRequest(memoryRequests[index]) });
  } catch (error) {
    console.error(error);
    return response.status(500).json({ message: "Unable to update request status." });
  }
});

app.use((error, request, response, next) => {
  console.error("Unhandled API error:", error);
  response.status(500).json({
    message: "Internal server error",
    detail: process.env.NODE_ENV === "production" ? undefined : error.message
  });
});

connectDatabase()
  .catch((error) => {
    console.error("Database bootstrap failed:", error);
    return false;
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`StartupGrow API running on port ${port}`);
      console.log(`Allowed client origins: ${Array.from(allowedOrigins).join(", ")}`);
    });
  });
