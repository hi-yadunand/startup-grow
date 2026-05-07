const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

async function parseResponse(response) {
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed. Please try again.");
  }

  return payload;
}

function isNetworkFallbackCandidate(error) {
  return (
    error instanceof TypeError ||
    /CORS|Failed to fetch|Load failed|NetworkError/i.test(error.message || "")
  );
}

async function requestJson(path, options = {}) {
  const endpoints = API_BASE ? [`${API_BASE}${path}`, path] : [path];
  let fallbackError = null;

  for (let index = 0; index < endpoints.length; index += 1) {
    try {
      const response = await fetch(endpoints[index], options);

      if (index === 0 && endpoints.length > 1 && response.status === 404) {
        fallbackError = new Error("External API route not found.");
        continue;
      }

      return await parseResponse(response);
    } catch (error) {
      if (index === 0 && endpoints.length > 1 && isNetworkFallbackCandidate(error)) {
        fallbackError = error;
        continue;
      }

      throw error;
    }
  }

  throw fallbackError || new Error("Request failed. Please try again.");
}

export async function createServiceRequest(data) {
  return requestJson("/api/requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export async function fetchServiceRequests() {
  return requestJson("/api/requests", {
    cache: "no-store"
  });
}

export async function updateRequestStatus(id, status) {
  return requestJson(`/api/requests/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  });
}

export async function createContactLead(data) {
  return requestJson("/api/leads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
}

export async function fetchContactLeads() {
  return requestJson("/api/leads", {
    cache: "no-store"
  });
}

export async function updateLeadStatus(id, status) {
  return requestJson(`/api/leads/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  });
}
