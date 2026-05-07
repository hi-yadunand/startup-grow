import apiCore from "../../../server/apiCore";

const { createLead, listLeads } = apiCore;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function send(result) {
  return Response.json(result.body, { status: result.status });
}

async function readBody(request) {
  return request.json().catch(() => ({}));
}

export async function GET() {
  return send(await listLeads());
}

export async function POST(request) {
  return send(await createLead(await readBody(request)));
}
