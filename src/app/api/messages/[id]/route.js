// src/app/api/messages/[id]/route.js
import { NextResponse } from "next/server";
import { mockMessages } from "../../../../lib/mockMessages";

// GET /api/messages/:id  
export async function GET(_request, { params }) {
  const { id } = params;

  const conversation = mockMessages.find((m) => m.id === id);

  if (!conversation) {
    return NextResponse.json(
      { error: "Conversa não encontrada." },
      { status: 404 }
    );
  }

  return NextResponse.json(conversation);
}

// POST /api/messages/:id 
export async function POST(request, { params }) {
  const { id } = params;

  const conversation = mockMessages.find((m) => m.id === id);

  if (!conversation) {
    return NextResponse.json(
      { error: "Conversa não encontrada." },
      { status: 404 }
    );
  }

  const body = await request.json();
  const text = (body.text || "").trim();

  if (!text) {
    return NextResponse.json(
      { error: "Texto da mensagem é obrigatório." },
      { status: 400 }
    );
  }

  const newMessage = {
    id: `local-${Date.now()}`,
    from: "candidate",
    author: "Você",
    time: "agora mesmo",
    text,
  };

  conversation.thread.push(newMessage);

  return NextResponse.json(
    {
      ok: true,
      message: "Mensagem recebida (simulado).",
      data: newMessage,
    },
    { status: 201 }
  );
}

