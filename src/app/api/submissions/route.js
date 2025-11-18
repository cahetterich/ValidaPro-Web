import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ submissions: [] });
}
export async function POST(request) {
  const payload = await request.json().catch(()=>({}));
  return NextResponse.json({{ ok: true, received: payload }}, { status: 201 });
}
export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}
