import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ ok: true });
}
export async function POST(request) {
  const payload = await request.json().catch(()=>({}));
  return NextResponse.json({ url: 'https://upload.mock/url' }, { status: 201 });
}
export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}
