// src/components/MessageReplyForm.jsx
"use client";

import { useState } from "react";

export default function MessageReplyForm({ messageId, authorName }) {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const trimmed = text.trim();
    if (!trimmed) {
      setError("Escreva uma mensagem antes de enviar.");
      return;
    }

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(`/api/messages/${messageId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: trimmed }),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar");
      }

      // Se chegou aqui, deu tudo certo
      setText("");
      setStatus("success");

      // depois de um tempinho, volta pro estado normal
      setTimeout(() => setStatus("idle"), 2000);
    } catch (err) {
      console.error(err);
      setStatus("error");
      setError("Não foi possível enviar agora. Tente novamente em alguns instantes.");
    }
  }

  return (
    <form className="message-reply" onSubmit={handleSubmit}>
      <label className="message-reply-label" htmlFor="resposta">
        Escreva uma resposta para {authorName}
      </label>

      <textarea
        id="resposta"
        className="message-reply-input"
        rows={4}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Agradeça pelo feedback, explique ajustes que pretende fazer ou envie dúvidas específicas."
      />

      <div className="message-reply-actions">
        <button
          type="submit"
          className="btn btn-sm"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Enviando..." : "Enviar mensagem"}
        </button>
        <p className="message-reply-note">
          As respostas podem levar algum tempo. Você será avisado por e-mail
          quando um mentor responder.
        </p>
      </div>

      {status === "success" && (
        <p className="feedback-meta" role="status">
          Mensagem enviada com sucesso (simulação).
        </p>
      )}

      {status === "error" && (
        <p className="feedback-meta" role="alert">
          {error}
        </p>
      )}
    </form>
  );
}
