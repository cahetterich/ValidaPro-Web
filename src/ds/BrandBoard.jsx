import tokens from "./tokens";

export default function BrandBoard() {
  const colors = [
    {
      name: "Azul Primário",
      hex: tokens.colors.primary,
      usage: "Botões principais, links, destaques",
    },
    {
      name: "Verde Validação",
      hex: tokens.colors.success,
      usage: "Feedback de sucesso, indicadores positivos",
    },
    {
      name: "Destaque / Alerta",
      hex: tokens.colors.warning,
      usage: "Avisos, badges de atenção, foco",
    },
    {
      name: "Texto",
      hex: tokens.colors.text,
      usage: "Texto padrão em fundo claro",
    },
    {
      name: "Fundo",
      hex: tokens.colors.bg,
      usage: "Backgrounds, seções, cartões",
    },
    {
      name: "Branco",
      hex: tokens.colors.white,
      usage: "Cartões, superfícies elevadas",
    },
  ];

  return (
    <section className="card" aria-labelledby="brandboard-title">
      <h2 id="brandboard-title" style={{ marginTop: 0 }}>
        Brand Board & Tokens
      </h2>

      <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 12 }}>
        Paleta, superfícies e tokens básicos que guiam o ValidaPro no web e
        mobile.
      </p>

      <div
        style={{
          display: "grid",
          gap: 12,
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        }}
      >
        {colors.map((c) => (
          <div
            key={c.hex}
            className="card"
            style={{
              padding: 0,
              boxShadow: "none",
              borderRadius: 14,
            }}
          >
            <div
              style={{
                height: 56,
                borderTopLeftRadius: 14,
                borderTopRightRadius: 14,
                background: c.hex,
              }}
            />
            <div style={{ padding: 12 }}>
              <div style={{ fontWeight: 600 }}>{c.name}</div>
              <div style={{ fontSize: 12, opacity: 0.7 }}>{c.hex}</div>
              <div style={{ marginTop: 4, fontSize: 12 }}>{c.usage}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
