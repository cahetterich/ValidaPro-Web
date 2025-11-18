// src/app/app/alertas/page.jsx
const alerts = [
  {
    id: "prazo-desafio",
    type: "warning",
    title: "Prazo se aproximando",
    message:
      "O desafio “Formulário acessível” vence em 24 horas. Envie sua entrega ou peça mais tempo ao mentor.",
    when: "há 3 horas",
  },
  {
    id: "novo-feedback",
    type: "success",
    title: "Novo feedback disponível",
    message:
      "Você recebeu um novo feedback no desafio “Botões principais”. Veja comentários e próximos passos.",
    when: "há 1 dia",
  },
];

export default function AlertasPage() {
  return (
    <div className="page-grid">
      {/* HEADER */}
      <section className="section" aria-labelledby="alerts-title">
        <div className="section-header">
          <p className="section-kicker">Alertas</p>
          <h1 id="alerts-title" className="section-title">
            Alertas e avisos importantes
          </h1>
          <p className="section-subtitle">
            Central de notificações sobre prazos, feedbacks novos e eventos
            relevantes da sua jornada.
          </p>
        </div>
      </section>

      {/* LISTA DE ALERTAS */}
      <section className="section" aria-label="Lista de alertas">
        <div className="stack-md">
          {alerts.map((alert) => (
            <article key={alert.id}>
              {alert.type === "warning" ? (
                <div className="warning-surface">
                  <strong>{alert.title}</strong>
                  <p className="success-note">{alert.message}</p>
                  <p className="feedback-meta" style={{ marginTop: 4 }}>
                    {alert.when}
                  </p>
                </div>
              ) : (
                <div className="success-surface">
                  <strong>{alert.title}</strong>
                  <p className="success-note">{alert.message}</p>
                  <p className="feedback-meta" style={{ marginTop: 4 }}>
                    {alert.when}
                  </p>
                </div>
              )}
            </article>
          ))}

          {alerts.length === 0 && (
            <p className="section-subtitle">
              Nenhum alerta pendente no momento. Quando houver avisos sobre
              prazos ou feedbacks, eles aparecem aqui.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
