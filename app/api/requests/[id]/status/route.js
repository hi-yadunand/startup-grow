import apiCore from "../../../../../server/apiCore";

const { updateRequestStatus } = apiCore;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function send(result) {
  return Response.json(result.body, { status: result.status });
}

async function readBody(request) {
  return request.json().catch(() => ({}));
}

export async function PATCH(request, { params }) {
  const body = await readBody(request);
  const { id } = await params;

  return send(await updateRequestStatus(id, body.status));
}
