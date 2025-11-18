// src/app/app/mensagens/page.jsx
import Link from "next/link";
import { mockMessages } from "../../../lib/mockMessages";

export default function MensagensPage() {
  return (
    <main className="shell-main page-grid">
      {/* HEADER */}
      <section className="section" aria-labelledby="mensagens-title">
        <div className="section-header">
          <p className="section-kicker">Mensagens</p>
          <h1 id="mensagens-title" className="section-title">
            Conversas com mentores e sistema
          </h1>
          <p className="section-subtitle">
            Acompanhe feedbacks, avisos e orientações trocadas com mentores e empresas ao longo da sua jornada.
          </p>
        </div>
      </section>

      {/* LISTA DE MENSAGENS */}
      <section className="section">
        <div className="stack-md">
          {mockMessages.map((msg) => (
            <div
              key={msg.id}
              className={
                "card message-item " +
                (msg.isUnread ? "message-unread" : "")
              }
            >
              {/* Esquerda: avatar + conteúdo */}
              <div className="message-left">
                <div className="message-avatar-wrap">
                  <div
                    className={
                      "avatar avatar--small " +
                      (msg.avatarType === "mentor"
                        ? "avatar--mentor"
                        : "avatar--system")
                    }
                    aria-hidden="true"
                  >
                    {msg.avatarInitials}
                  </div>
                </div>

                <div className="message-content">
                  <div className="message-title-row">
                    <h3 className="message-title">{msg.title}</h3>
                    {msg.isUnread && (
                      <span className="message-pill">Novo</span>
                    )}
                  </div>

                  <p className="message-snippet">{msg.snippet}</p>

                  <p className="message-meta">
                    {msg.authorName}
                    {msg.authorRole ? ` · ${msg.authorRole}` : ""} ·{" "}
                    {msg.isUnread ? "não lida" : "lida"}
                  </p>
                </div>
              </div>

              {/* Direita: tempo + ação */}
              <div className="message-right">
                <span className="message-time">{msg.timeAgo}</span>
                <Link
                  href={`/app/mensagens/${msg.id}`}
                  className="text-link"
                >
                  Abrir conversa
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
