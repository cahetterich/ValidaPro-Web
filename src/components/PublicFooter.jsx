// src/components/PublicFooter.jsx
export default function PublicFooter() {
  return (
    <footer className="footer" aria-label="Rodapé do ValidaPro">
      <div className="footer-inner">
        {/* Bloco da marca */}
        <div className="footer-brand">
          <span className="brand-mark" aria-hidden="true">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <rect
                x="3"
                y="4"
                width="14"
                height="12"
                rx="3"
                fill="#ffffff"
                opacity="0.95"
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

          <div className="footer-brand-text">
            <p className="footer-title">ValidaPro</p>
            <p className="footer-tagline">
              Plataforma de desafios práticos para recolocação.
            </p>
          </div>
        </div>

        {/* Bloco de meta / info */}
        <div className="footer-meta">
          <p className="footer-copy">
            © 2025 ValidaPro. Projeto acadêmico FIAP.
          </p>
          <p className="footer-note">
            Protótipo educacional — fluxos, dados e desafios são fictícios.
          </p>
          <a href="#conteudo" className="footer-link">
            Voltar ao topo
          </a>
        </div>
      </div>
    </footer>
  );
}
