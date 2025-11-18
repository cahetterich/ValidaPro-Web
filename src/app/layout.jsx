// src/app/layout.jsx
import "../styles/globals.css";
import "../styles/components.css";

export const metadata = {
  title: "ValidaPro",
  description: "ValidaPro — desafios práticos que viram evidência de skill.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="shell">
        {children}
      </body>
    </html>
  );
}

