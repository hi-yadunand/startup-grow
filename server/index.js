require("dotenv").config();

const cors = require("cors");
const express = require("express");
const { connectDatabase, isDatabaseConnected } = require("./db");
const ServiceRequest = require("./models/ServiceRequest");

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigin = process.env.CLIENT_ORIGIN || "http://localhost:3000";

const validStatuses = ["New", "Contacted", "In progress", "Closed"];
const memoryRequests = [];

const services = [
  "SEO",
  "PPC Advertising",
  "Social Media Marketing",
  "Content Marketing",
  "Email Marketing",
  "Web Design & Development"
];

app.use(
  cors({
    origin: allowedOrigin,
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

app.get("/api/health", (request, response) => {
  response.json({
    status: "ok",
    database: isDatabaseConnected() ? "mongodb" : "memory"
  });
});

app.get("/api/services", (request, response) => {
  response.json({ data: services });
});

app.post("/api/requests", async (request, response) => {
  const validation = validateRequest(request.body);

  if (validation.error) {
    return response.status(400).json({ message: validation.error });
  }

  try {
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

connectDatabase().then(() => {
  app.listen(port, () => {
    console.log(`StartupGrow API running at http://localhost:${port}`);
  });
});
