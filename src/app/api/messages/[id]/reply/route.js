// src/app/api/messages/[id]/reply/route.js
import { NextResponse } from "next/server";
import { mockMessages } from "@/lib/mockMessages";

// POST /api/messages/:id/reply
export async function POST(request, { params }) {
  const { id } = params;
  const body = await request.json();

  const text = body?.text?.trim();

  if (!text) {
    return NextResponse.json(
      { error: "Texto da mensagem é obrigatório." },
      { status: 400 }
    );
  }

  const conversation = mockMessages.find((m) => m.id === id);

  if (!conversation) {
    return NextResponse.json(
      { error: "Conversa não encontrada." },
      { status: 404 }
    );
  }

  const newMessage = {
    id: `m${conversation.thread.length + 1}`,
    from: "candidate",
    author: "Você",
    time: "agora mesmo",
    text,
  };

  conversation.thread.push(newMessage);

  return NextResponse.json(
    {
      success: true,
      message: newMessage,
    },
    { status: 201 }
  );
}
