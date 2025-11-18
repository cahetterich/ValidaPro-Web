// src/app/(marketing)/layout.jsx

import PublicHeader from "../../components/PublicHeader";
import PublicFooter from "../../components/PublicFooter";

export default function MarketingLayout({ children }) {
  return (
    <>
      <PublicHeader />

      <main className="shell-main" id="conteudo" role="main">
        {children}
      </main>

      <PublicFooter />
    </>
  );
}
