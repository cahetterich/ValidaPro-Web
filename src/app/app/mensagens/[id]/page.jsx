// src/app/app/mensagens/[id]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { mockMessages } from "../../../../lib/mockMessages";

export default function MensagemDetalhePage({ params }) {
  const mensagem = mockMessages.find((m) => m.id === params.id);

  if (!mensagem) {
    return notFound();
  }

  return (
    <main className="shell-main page-grid">
      {/* HEADER DA CONVERSA */}
      <section className="section" aria-labelledby="mensagem-title">
        <div className="section-header">
          <p className="section-kicker">Mensagens</p>
          <h1 id="mensagem-title" className="section-title">
            {mensagem.title}
          </h1>
          <p className="section-subtitle">
            Conversa com{" "}
            <strong>{mensagem.authorName}</strong>
            {mensagem.authorRole ? ` · ${mensagem.authorRole}` : ""}.
          </p>
        </div>

        <div className="section-actions">
          <Link href="/app/mensagens" className="text-link">
            ← Voltar para mensagens
          </Link>
        </div>
      </section>

      {/* THREAD / CONVERSA */}
      <section className="section">
        <div className="message-thread">

          {mensagem.thread.map((item) => {
            const isMe = item.from === "candidate";
            const isMentor = item.from === "mentor";
            const isSystem = item.from === "system";

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
                      {isMe
                        ? "VC"
                        : mensagem.avatarInitials}
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
                    <span className="message-bubble-author">
                      {item.author}
                    </span>
                    <span className="message-bubble-time">
                      {item.time}
                    </span>
                  </div>
                  <p className="message-bubble-text">{item.text}</p>
                </div>
              </div>
            );
          })}

        </div>

        {/* CAMPO DE RESPOSTA (UI de chat futura) */}
        <form
          className="message-reply"
          onSubmit={(e) => {
            e.preventDefault();
            // futura integração com API aqui
          }}
        >
          <label className="message-reply-label" htmlFor="resposta">
            Escreva uma resposta para {mensagem.authorName}
          </label>
          <textarea
            id="resposta"
            className="message-reply-input"
            rows={4}
            placeholder="Agradeça pelo feedback, explique ajustes que pretende fazer ou envie dúvidas específicas."
          />
          <div className="message-reply-actions">
            <button type="submit" className="btn btn-sm">
              Enviar mensagem
            </button>
            <p className="message-reply-note">
              As respostas podem levar algum tempo. Você será avisado por e-mail quando um mentor responder.
            </p>
          </div>
        </form>
      </section>
    </main>
  );
}
