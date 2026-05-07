import apiCore from "../../../server/apiCore";

const { getHealth } = apiCore;

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function send(result) {
  return Response.json(result.body, { status: result.status });
}

export async function GET() {
  return send(await getHealth());
}
