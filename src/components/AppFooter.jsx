// src/components/AppFooter.jsx
export default function AppFooter() {
  return (
    <footer className="app-footer" aria-label="Rodapé da área logada">
      <div className="app-footer-inner">
        <div className="app-footer-left">
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
          <div className="app-footer-text">
            <span className="app-footer-name">ValidaPro</span>
            <span className="app-footer-tagline">
              Plataforma de desafios práticos para recolocação.
            </span>
          </div>
        </div>

        <p className="app-footer-meta">
          © 2025 ValidaPro. Protótipo educacional — fluxos, dados e desafios são
          fictícios.
        </p>
      </div>
    </footer>
  );
}



