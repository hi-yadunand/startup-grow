const { connectDatabase, getDatabaseStatus, isDatabaseConnected } = require("./db");
const ServiceRequest = require("./models/ServiceRequest");
const ContactLead = require("./models/ContactLead");

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

function cleanString(value) {
  return String(value || "").trim();
}

function result(status, body) {
  return { status, body };
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

async function getHealth() {
  await connectDatabase();
  const database = getDatabaseStatus();

  return result(200, {
    status: "ok",
    database: database.connected ? "mongodb" : "memory",
    databaseError: database.connected ? undefined : database.lastError
  });
}

function getServices() {
  return result(200, { data: services });
}

async function createLead(body) {
  const validation = validateLead(body);

  if (validation.error) {
    return result(400, { message: validation.error });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const created = await ContactLead.create(validation.payload);
      return result(201, { data: formatLead(created) });
    }

    const created = {
      id: `mem_lead_${Date.now()}`,
      ...validation.payload,
      status: "New",
      createdAt: new Date().toISOString()
    };
    memoryLeads.unshift(created);

    return result(201, { data: formatLead(created) });
  } catch (error) {
    console.error(error);
    return result(500, { message: "Unable to create contact lead." });
  }
}

async function listLeads() {
  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const leads = await ContactLead.find().sort({ createdAt: -1 }).limit(50);
      return result(200, { data: leads.map(formatLead) });
    }

    return result(200, { data: memoryLeads.slice(0, 50).map(formatLead) });
  } catch (error) {
    console.error(error);
    return result(500, { message: "Unable to load contact leads." });
  }
}

async function updateLeadStatus(id, statusValue) {
  const status = cleanString(statusValue);

  if (!validStatuses.includes(status)) {
    return result(400, { message: "Invalid status." });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const updated = await ContactLead.findByIdAndUpdate(id, { status }, { new: true });

      if (!updated) {
        return result(404, { message: "Lead not found." });
      }

      return result(200, { data: formatLead(updated) });
    }

    const index = memoryLeads.findIndex((item) => item.id === id);

    if (index === -1) {
      return result(404, { message: "Lead not found." });
    }

    memoryLeads[index] = {
      ...memoryLeads[index],
      status
    };

    return result(200, { data: formatLead(memoryLeads[index]) });
  } catch (error) {
    console.error(error);
    return result(500, { message: "Unable to update lead status." });
  }
}

async function createRequest(body) {
  const validation = validateRequest(body);

  if (validation.error) {
    return result(400, { message: validation.error });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const created = await ServiceRequest.create(validation.payload);
      return result(201, { data: formatRequest(created) });
    }

    const created = {
      id: `mem_${Date.now()}`,
      ...validation.payload,
      status: "New",
      createdAt: new Date().toISOString()
    };
    memoryRequests.unshift(created);

    return result(201, { data: formatRequest(created) });
  } catch (error) {
    console.error(error);
    return result(500, { message: "Unable to create service request." });
  }
}

async function listRequests() {
  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const requests = await ServiceRequest.find().sort({ createdAt: -1 }).limit(50);
      return result(200, { data: requests.map(formatRequest) });
    }

    return result(200, { data: memoryRequests.slice(0, 50).map(formatRequest) });
  } catch (error) {
    console.error(error);
    return result(500, { message: "Unable to load service requests." });
  }
}

async function updateRequestStatus(id, statusValue) {
  const status = cleanString(statusValue);

  if (!validStatuses.includes(status)) {
    return result(400, { message: "Invalid status." });
  }

  try {
    await connectDatabase();

    if (isDatabaseConnected()) {
      const updated = await ServiceRequest.findByIdAndUpdate(id, { status }, { new: true });

      if (!updated) {
        return result(404, { message: "Request not found." });
      }

      return result(200, { data: formatRequest(updated) });
    }

    const index = memoryRequests.findIndex((item) => item.id === id);

    if (index === -1) {
      return result(404, { message: "Request not found." });
    }

    memoryRequests[index] = {
      ...memoryRequests[index],
      status
    };

    return result(200, { data: formatRequest(memoryRequests[index]) });
  } catch (error) {
    console.error(error);
    return result(500, { message: "Unable to update request status." });
  }
}

module.exports = {
  createLead,
  createRequest,
  getHealth,
  getServices,
  listLeads,
  listRequests,
  services,
  updateLeadStatus,
  updateRequestStatus,
  validStatuses
};
