// src/components/AppHeader.jsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navLinks = [
  { href: "/app", label: "Minha jornada" },
  { href: "/app/trilhas", label: "Trilhas" },
  { href: "/app/mensagens", label: "Mensagens" },
  { href: "/app/alertas", label: "Alertas" },
  { href: "/app/configuracoes", label: "Configurações" },
];

export default function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 900) setMenuOpen(false);
    }
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const isActive = (href) =>
    pathname === href || (href !== "/app" && pathname?.startsWith(href));

  function handleLogout() {
    setMenuOpen(false);
    // aqui no futuro entra o signOut real
    router.push("/"); // volta pra landing page
  }

  return (
    <header className="shell-nav app-header">
      <div className="shell-nav-inner">
        <div className="nav-row">
          {/* BRAND */}
          <Link
            href="/app"
            className="brand"
            aria-label="ValidaPro - área do candidato"
          >
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
              <span className="brand-tagline">Área do candidato</span>
            </span>
          </Link>

          {/* NAV DESKTOP */}
          <div className="nav-desktop">
            <nav
              className="nav-main"
              aria-label="Navegação principal da área logada"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    "nav-link" + (isActive(link.href) ? " nav-link--active" : "")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="nav-actions">
              <span className="badge badge-success">
                <span className="badge-dot" aria-hidden="true" />
                Demo ativa
              </span>
              <button
                type="button"
                className="app-logout"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          </div>

          {/* HAMBÚRGUER */}
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

        {/* MENU MOBILE */}
        <div className={menuOpen ? "nav-mobile nav-mobile--open" : "nav-mobile"}>
          <nav
            className="nav-mobile-main"
            aria-label="Navegação mobile da área logada"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  "nav-mobile-link" +
                  (isActive(link.href) ? " nav-mobile-link--active" : "")
                }
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-mobile-actions">
            <span className="badge badge-success">
              <span className="badge-dot" aria-hidden="true" />
              Demo ativa
            </span>

            <button
              type="button"
              className="btn btn-ghost btn-block"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}



