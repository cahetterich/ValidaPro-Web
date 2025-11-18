"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RecoverPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // MVP: não envia nada de verdade, só mostra fluxo
    router.push("/login");
  }

  return (
    <main className="shell-main">
      <div className="page-grid">
        <section className="section" aria-labelledby="recover-title">
          <div className="stack-md">
            <header className="section-header">
              <p className="section-kicker">Acesso · Recuperar senha</p>
              <h1 id="recover-title" className="section-title">
                Recuperar acesso
              </h1>
              <p className="section-subtitle">
                Informe o e-mail que você usa no ValidaPro. Em uma versão de
                produção, enviaremos um link seguro para redefinir sua senha.
              </p>
            </header>

            <form className="stack-md" onSubmit={handleSubmit} noValidate>
              <div className="stack-xs">
                <label htmlFor="email" className="card-title">
                  E-mail cadastrado
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="input"
                  placeholder="voce@provedor.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="hero-actions" style={{ marginTop: 8 }}>
                <button type="submit" className="btn btn-lg">
                  Enviar instruções
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={() => router.push("/login")}
                >
                  Voltar ao login
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
