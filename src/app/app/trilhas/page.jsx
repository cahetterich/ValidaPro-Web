// src/app/app/trilhas/page.jsx

const activeTracks = [
  {
    id: "frontend-acessivel",
    name: "Front-end Acessível",
    area: "Produto digital · Front-end",
    level: "Intermediário",
    progress: 0.45,
    status: "Em andamento",
    nextChallenge: "Formulário acessível",
  },
  {
    id: "api-node",
    name: "API Node para validação",
    area: "Back-end · Node.js",
    level: "Intermediário",
    progress: 0.2,
    status: "Explorando",
    nextChallenge: "Endpoint de submissões",
  },
];

const completedTracks = [
  {
    id: "ux-produtos-digitais",
    name: "UX para produtos digitais",
    finishedAt: "há 2 semanas",
    highlight: "Destaque em escrita de justificativas e argumentação.",
  },
];

export default function TrilhasPage() {
  return (
    <div className="page-grid">
      {/* HEADER */}
      <section className="section" aria-labelledby="tracks-title">
        <div className="section-header">
          <p className="section-kicker">Trilhas</p>
          <h1 id="tracks-title" className="section-title">
            Suas trilhas de validação
          </h1>
          <p className="section-subtitle">
            Acompanhe trilhas em andamento, veja o que já foi concluído e
            escolha o próximo foco da sua jornada.
          </p>
        </div>
      </section>

      {/* TRILHAS ATIVAS */}
      <section className="section" aria-labelledby="tracks-active-title">
        <div className="section-header">
          <h2 id="tracks-active-title" className="section-title">
            Trilhas em andamento
          </h2>
          <p className="section-subtitle">
            Continue de onde parou ou alterne entre trilhas, sem perder o
            histórico de entregas e feedbacks.
          </p>
        </div>

        <div className="stack-md">
          {activeTracks.map((track) => {
            const progressPercent = Math.round(track.progress * 100);

            return (
              <article
                key={track.id}
                className="card card-soft track-card"
                aria-label={`Trilha ${track.name}`}
              >
                {/* Bloco principal da trilha */}
                <div className="track-main">
                  <header className="track-header">
                    <div>
                      <p className="card-title">{track.name}</p>

                      <div className="track-meta-row">
                        <span className="chip chip-primary">
                          {track.status}
                        </span>
                        <span className="chip">{track.level}</span>
                        <span className="track-meta-text">{track.area}</span>
                      </div>
                    </div>

                    <div className="track-kpi">
                      <p className="track-kpi-label">Conclusão</p>
                      <p className="track-kpi-value">
                        {progressPercent}%
                      </p>
                    </div>
                  </header>

                  <div className="track-progress">
                    <div
                      className="progress"
                      role="progressbar"
                      aria-valuenow={progressPercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Progresso da trilha ${track.name}`}
                    >
                      <div
                        className="progress-bar"
                        style={{ width: `${progressPercent}%` }}
                      />
                    </div>

                    <p className="track-next">
                      Próximo desafio:{" "}
                      <strong>{track.nextChallenge}</strong>
                    </p>
                  </div>
                </div>

                {/* Ações da trilha */}
                <div className="track-actions">
                  <a
                    href={`/app/trilha/${track.id}`}
                    className="btn btn-sm"
                  >
                    Continuar trilha
                  </a>
                  <a
                    href={`/app/trilha/${track.id}/detalhes`}
                    className="btn btn-secondary btn-sm"
                  >
                    Ver detalhes
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* TRILHAS CONCLUÍDAS */}
      <section className="section" aria-labelledby="tracks-done-title">
        <div className="section-header">
          <h2 id="tracks-done-title" className="section-title">
            Trilhas concluídas
          </h2>
          <p className="section-subtitle">
            Trilha finalizada vira evidência: você pode usar esses resultados
            em processos seletivos e conversas com empresas.
          </p>
        </div>

        {completedTracks.length === 0 ? (
          <p className="section-subtitle">
            Assim que você concluir uma trilha, ela aparece aqui com o resumo
            dos resultados.
          </p>
        ) : (
          <div className="grid-3">
            {completedTracks.map((track) => (
              <article key={track.id} className="card card-soft track-card--compact">
                <header className="card-header">
                  <p className="card-title">{track.name}</p>
                  <p className="card-subtitle">
                    Concluída {track.finishedAt}
                  </p>
                </header>
                <p className="feature-text" style={{ marginBottom: 8 }}>
                  {track.highlight}
                </p>
                <a href="/app/feedbacks" className="text-link">
                  Ver feedbacks dessa trilha
                </a>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
