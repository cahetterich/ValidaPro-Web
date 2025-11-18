// src/components/PublicHeader.jsx
"use client";

import { useState, useEffect } from "react";

export default function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Fecha o menu ao aumentar a tela (evita ficar aberto quando volta pro desktop)
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <header className="shell-nav">
      <div className="shell-nav-inner">
        <div className="nav-row">
          {/* Brand */}
          <a href="/" className="brand" aria-label="ValidaPro - início">
            <span className="brand-mark" aria-hidden="true">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="2.5"
                  y="4"
                  width="15"
                  height="12"
                  rx="2.5"
                  fill="#ffffff"
                  opacity="0.96"
                />
                <path
                  d="M8.2 10.8L10.1 12.6L14.1 8.5"
                  fill="none"
                  stroke="#00A896"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="brand-wordmark">
              <span className="brand-name">ValidaPro</span>
              <span className="brand-tagline">Validação que abre portas</span>
            </span>
          </a>

          {/* Navegação desktop */}
          <div className="nav-desktop">
            <nav className="nav-main" aria-label="Navegação principal">
              <a href="/" className="nav-link nav-link--active">
                Visão geral
              </a>
              <a href="#como-funciona" className="nav-link">
                Como funciona
              </a>
              <a href="#para-empresas" className="nav-link">
                Para empresas
              </a>
            </nav>
            <div className="nav-actions">
              <a href="/criar-conta" className="btn btn-ghost">
                Criar conta
              </a>
              <a href="/login?role=mentor" className="btn btn-sm">
                Entrar
              </a>
            </div>
          </div>

          {/* Botão mobile */}
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen ? "true" : "false"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={
            menuOpen ? "nav-mobile nav-mobile--open" : "nav-mobile"
          }
        >
          <nav
            className="nav-mobile-main"
            aria-label="Navegação principal mobile"
          >
            <a
              href="/"
              className="nav-mobile-link nav-mobile-link--active"
              onClick={() => setMenuOpen(false)}
            >
              Visão geral
            </a>
            <a
              href="#como-funciona"
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              Como funciona
            </a>
            <a
              href="#para-empresas"
              className="nav-mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              Para empresas
            </a>
          </nav>
          <div className="nav-mobile-actions">
            <a
              href="/login"
              className="btn btn-ghost btn-block"
              onClick={() => setMenuOpen(false)}
            >
              Entrar
            </a>
            <a
              href="/login?role=mentor"
              className="btn btn-sm btn-block"
              onClick={() => setMenuOpen(false)}
            >
              Começar piloto
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
