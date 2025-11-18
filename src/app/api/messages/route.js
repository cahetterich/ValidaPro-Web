// src/app/api/messages/route.js
import { NextResponse } from "next/server";
import { mockMessages } from "../../../lib/mockMessages";

// GET /api/messages
export async function GET() {
  // 
  return NextResponse.json({
    items: mockMessages,
  });
}

