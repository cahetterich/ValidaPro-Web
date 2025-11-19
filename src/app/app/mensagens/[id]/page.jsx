// src/app/app/mensagens/[id]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { getMessageById } from "../../../../lib/apiMessages";
import MensagemThreadClient from "./MensagemThreadClient";

export default async function MensagemDetalhePage({ params }) {
  let mensagem;

  try {
    mensagem = await getMessageById(params.id);
  } catch (error) {
    console.error("Erro ao carregar mensagem", error);
    return notFound();
  }

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
            Conversa com <strong>{mensagem.authorName}</strong>
            {mensagem.authorRole ? ` · ${mensagem.authorRole}` : ""}.
          </p>
        </div>

        <div className="section-actions">
          <Link href="/app/mensagens" className="text-link">
            ← Voltar para mensagens
          </Link>
        </div>
      </section>

      {/* THREAD / CONVERSA + RESPOSTA (CLIENT) */}
      <section className="section">
        <MensagemThreadClient
          conversationId={mensagem.id}
          authorName={mensagem.authorName}
          avatarInitials={mensagem.avatarInitials}
          initialThread={mensagem.thread}
        />
      </section>
    </main>
  );
}

