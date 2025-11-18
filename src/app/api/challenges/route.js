import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ challenges: [] });
}
export async function OPTIONS() {
  return NextResponse.json({ ok: true });
}
