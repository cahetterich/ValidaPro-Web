// src/app/api/messages/[id]/route.js
import { NextResponse } from "next/server";
import { mockMessages } from "../../../../lib/mockMessages";

// GET /api/messages/1
// GET /api/messages/2
export async function GET(_request, { params }) {
  const { id } = params;

  const conversation = mockMessages.find((m) => m.id === id);

  if (!conversation) {
    return NextResponse.json(
      { error: "Conversa não encontrada." },
      { status: 404 }
    );
  }

  //
  return NextResponse.json(conversation);
}
