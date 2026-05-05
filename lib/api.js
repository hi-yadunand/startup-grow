const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function parseResponse(response) {
  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed. Please try again.");
  }

  return payload;
}

export async function createServiceRequest(data) {
  const response = await fetch(`${API_BASE}/api/requests`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return parseResponse(response);
}

export async function fetchServiceRequests() {
  const response = await fetch(`${API_BASE}/api/requests`, {
    cache: "no-store"
  });

  return parseResponse(response);
}

export async function updateRequestStatus(id, status) {
  const response = await fetch(`${API_BASE}/api/requests/${id}/status`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ status })
  });

  return parseResponse(response);
}
