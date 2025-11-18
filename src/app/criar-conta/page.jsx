"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [role, setRole] = useState("candidate");

  function handleSubmit(event) {
    event.preventDefault();
    // MVP: cadastro fictício → redireciona para /app
    router.push("/app");
  }

  return (
    <main className="shell-main">
      <div className="page-grid">
        <section className="section" aria-labelledby="signup-title">
          <div className="stack-md">
            <header className="section-header">
              <p className="section-kicker">Cadastro · ValidaPro</p>
              <h1 id="signup-title" className="section-title">
                Criar minha conta
              </h1>
              <p className="section-subtitle">
                Defina seus dados básicos para começar a resolver desafios ou
                avaliar evidências de skill.
              </p>
            </header>

            <form className="stack-md" onSubmit={handleSubmit} noValidate>
              {/* Tipo de conta */}
              <fieldset className="stack-sm">
                <legend className="section-subtitle" style={{ fontSize: "0.85rem" }}>
                  Tipo de acesso
                </legend>
                <div className="chip-row" role="radiogroup">
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

              {/* Nome */}
              <div className="stack-xs">
                <label htmlFor="nome" className="card-title">
                  Nome completo
                </label>
                <input
                  id="nome"
                  name="nome"
                  type="text"
                  required
                  className="input"
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </div>

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
                />
              </div>

              {/* Senha */}
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
              </div>

              <div className="hero-actions" style={{ marginTop: 8 }}>
                <button type="submit" className="btn btn-lg">
                  Criar conta
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg"
                  onClick={() => router.push("/login")}
                >
                  Já tenho conta
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
