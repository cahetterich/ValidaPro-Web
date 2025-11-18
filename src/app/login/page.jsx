// src/app/login/page.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("candidate");

  function handleSubmit(event) {
    event.preventDefault();
    // MVP: qualquer e-mail/senha leva para /app
    router.push("/app");
  }

  return (
    <main className="shell-main">
      <div className="page-grid">
        <section className="section" aria-labelledby="login-title">
          <div className="stack-md">
            <header className="section-header">
              <p className="section-kicker">Acesso · ValidaPro</p>
              <h1 id="login-title" className="section-title">
                Entrar na sua jornada de validação
              </h1>
              <p className="section-subtitle">
                Acesse como candidato para resolver desafios ou como empresa /
                mentor para avaliar evidências de skill.
              </p>
            </header>

            <form className="stack-md" onSubmit={handleSubmit} noValidate>
              {/* Tipo de acesso */}
              <fieldset className="stack-sm">
                <legend className="section-subtitle" style={{ fontSize: "0.85rem" }}>
                  Tipo de acesso
                </legend>
                <div
                  className="chip-row"
                  role="radiogroup"
                  aria-label="Tipo de conta"
                >
                  <button
                    type="button"
                    className={
                      "chip " + (role === "candidate" ? "chip-primary" : "")
                    }
                    onClick={() => setRole("candidate")}
                    aria-pressed={role === "candidate"}
                  >
                    Candidato
                  </button>
                  <button
                    type="button"
                    className={
                      "chip " + (role === "mentor" ? "chip-primary" : "")
                    }
                    onClick={() => setRole("mentor")}
                    aria-pressed={role === "mentor"}
                  >
                    Empresa / mentor
                  </button>
                </div>
              </fieldset>

              {/* E-mail */}
              <div className="stack-xs">
                <label htmlFor="email" className="card-title">
                  E-mail
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
                  aria-describedby="email-help"
                />
                <p id="email-help" className="section-subtitle" style={{ fontSize: "0.8rem" }}>
                  Usaremos este e-mail para avisar sobre desafios e novos feedbacks.
                </p>
              </div>

              {/* Senha + link de recuperação */}
              <div className="stack-xs">
                <label htmlFor="senha" className="card-title">
                  Senha
                </label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  className="input"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />

                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <a href="/recuperar-senha" className="text-link">
                    Esqueci minha senha
                  </a>
                </div>
              </div>

              {/* Ações */}
              <div className="hero-actions" style={{ marginTop: 8 }}>
                <button type="submit" className="btn btn-lg">
                  Entrar
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={() => router.push("/")}
                >
                  Voltar para a página inicial
                </button>
              </div>

              {/* Criar conta */}
              <p
                className="section-subtitle"
                style={{ fontSize: "0.8rem", marginTop: 4 }}
              >
                Ainda não tem conta?{" "}
                <a href="/criar-conta" className="text-link">
                  Criar minha conta
                </a>
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
