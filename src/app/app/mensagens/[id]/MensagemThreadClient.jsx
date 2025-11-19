// src/app/app/mensagens/[id]/MensagemThreadClient.jsx
"use client";

import { useState } from "react";

export default function MensagemThreadClient({
  conversationId,
  authorName,
  avatarInitials,
  initialThread,
}) {
  const [thread, setThread] = useState(initialThread);
  const [replyText, setReplyText] = useState("");

  // estados para edição
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const candidateInitials = "J"; // João Ribeiro

  async function handleSend(e) {
    e.preventDefault();
    const text = replyText.trim();
    if (!text) return;

    try {
      const res = await fetch(`/api/messages/${conversationId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      let newMessage;
      if (res.ok) {
        const data = await res.json();
        newMessage = data?.data ?? {
          id: `local-${Date.now()}`,
          from: "candidate",
          author: "Você",
          time: "agora mesmo",
          text,
        };
      } else {
        // se der erro na API, ainda assim adicionamos localmente
        newMessage = {
          id: `local-${Date.now()}`,
          from: "candidate",
          author: "Você",
          time: "agora mesmo",
          text,
        };
      }

      setThread((prev) => [...prev, newMessage]);
      setReplyText("");
    } catch (err) {
      console.error("Erro ao enviar mensagem", err);
    }
  }

  function handleDelete(messageId) {
    setThread((prev) => prev.filter((m) => m.id !== messageId));
  }

  function handleStartEdit(messageId, currentText) {
    setEditingId(messageId);
    setEditingText(currentText);
  }

  function handleCancelEdit() {
    setEditingId(null);
    setEditingText("");
  }

  function handleSaveEdit(messageId) {
    const text = editingText.trim();
    if (!text) return;

    setThread((prev) =>
      prev.map((m) =>
        m.id === messageId
          ? {
              ...m,
              text,
              time: m.time === "agora mesmo" ? "editado agora" : m.time,
            }
          : m
      )
    );

    setEditingId(null);
    setEditingText("");
  }

  return (
    <>
      {/* THREAD / CONVERSA */}
      <div className="message-thread">
        {thread.map((item) => {
          const isMe = item.from === "candidate";
          const isSystem = item.from === "system";

          const isEditing = editingId === item.id && isMe;

          return (
            <div
              key={item.id}
              className={
                "message-row " +
                (isMe ? "message-row--me" : "") +
                (isSystem ? " message-row--system" : "")
              }
            >
              {/* Avatar (mentor / você) */}
              {!isSystem && (
                <div className="message-avatar-wrap">
                  <div
                    className={
                      "avatar avatar--small " +
                      (isMe ? "avatar--me" : "avatar--mentor")
                    }
                  >
                    {isMe ? candidateInitials : avatarInitials}
                  </div>
                </div>
              )}

              <div
                className={
                  "message-bubble " +
                  (isMe ? "message-bubble--me" : "") +
                  (isSystem ? "message-bubble--system" : "")
                }
              >
                <div className="message-bubble-header">
                  <span className="message-bubble-author">{item.author}</span>
                  <span className="message-bubble-time">{item.time}</span>
                </div>

                {isEditing ? (
                  <>
                    <textarea
                      className="message-reply-input"
                      rows={3}
                      value={editingText}
                      onChange={(e) => setEditingText(e.target.value)}
                    />
                    <div className="message-actions">
                      <button
                        type="button"
                        onClick={() => handleSaveEdit(item.id)}
                      >
                        Salvar
                      </button>
                      <button type="button" onClick={handleCancelEdit}>
                        Cancelar
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="message-bubble-text">{item.text}</p>

                    {isMe && (
                      <div className="message-actions">
                        <button onClick={() => startEdit(item.id)}>
                          Editar
                        </button>
                        <button
                          className="delete"
                          onClick={() => deleteMessage(item.id)}
                        >
                          Excluir
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CAMPO DE RESPOSTA */}
      <form className="message-reply" onSubmit={handleSend}>
        <label className="message-reply-label" htmlFor="resposta">
          Escreva uma resposta para {authorName}
        </label>
        <textarea
          id="resposta"
          className="message-reply-input"
          rows={4}
          placeholder="Agradeça pelo feedback, explique ajustes que pretende fazer ou envie dúvidas específicas."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
        />
        <div className="message-reply-actions">
          <button type="submit" className="btn btn-sm">
            Enviar mensagem
          </button>
          <p className="message-reply-note">
            As respostas podem levar algum tempo. Você será avisado por e-mail
            quando um mentor responder.
          </p>
        </div>
      </form>
    </>
  );
}
