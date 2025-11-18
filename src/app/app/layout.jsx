// src/app/app/layout.jsx
import "../../styles/globals.css";
import "../../styles/components.css";
import "../../styles/app.css";   

import AppHeader from "../../components/AppHeader";
import AppFooter from "../../components/AppFooter";

export const metadata = {
  title: "ValidaPro — Área do candidato",
};

export default function AppLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="shell">
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo principal
        </a>

        <AppHeader />

        <main id="conteudo" className="shell-main" role="main">
          {children}
        </main>

        <AppFooter />
      </body>
    </html>
  );
}
