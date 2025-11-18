// src/app/app/page.jsx
import Link from "next/link";
import { mockDashboard } from "../../lib/mockDashboard";

export default function DashboardPage() {
  const { summary, activeTrack, recentFeedbacks, user } = mockDashboard;

  return (
    <main className="shell-main">
      <div className="page-grid">
        {/* HEADER + RESUMO */}
                <section className="section" aria-labelledby="dashboard-title">
          <div className="section-columns">
            {/* Coluna esquerda: texto principal */}
            <div className="stack-md">
              <div className="section-header">
                <p className="section-kicker">Área do candidato</p>
                <h1 id="dashboard-title" className="section-title">
                  Minha jornada de validação
                </h1>
                <p className="section-subtitle">
                  {user?.name
                    ? `Bem-vindo(a), ${user.name}. Aqui você acompanha suas trilhas, desafios em andamento e feedbacks recebidos.`
                    : "Aqui você acompanha suas trilhas, desafios em andamento e feedbacks recebidos."}
                </p>
              </div>
            </div>

            {/* Coluna direita: card de resumo */}
            <div className="stack-md">
              <div className="card card-soft">
                <div className="card-header">
                  <p className="card-title">Resumo rápido</p>
                  <p className="card-subtitle">
                    Visão geral das suas trilhas, desafios e feedbacks.
                  </p>
                </div>

               <ul className="summary-list">
                <li className="summary-item">
                  <div className="summary-text">
                    <p className="summary-label">Trilhas ativas</p>
                    <p className="summary-help">
                      Você tem {summary.activeTracks} trilha em andamento.
                    </p>
                  </div>
                  <p className="summary-value">{summary.activeTracks}</p>
                </li>

                <li className="summary-item">
                  <div className="summary-text">
                    <p className="summary-label">Desafios pendentes</p>
                    <p className="summary-help">
                      Existem desafios aguardando sua entrega.
                    </p>
                  </div>
                  <p className="summary-value">{summary.pendingChallenges}</p>
                </li>

                <li className="summary-item">
                  <div className="summary-text">
                    <p className="summary-label">Feedbacks recentes</p>
                    <p className="summary-help">
                      Veja o que mentores e empresas comentaram.
                    </p>
                  </div>
                  <p className="summary-value">{summary.recentFeedbacks}</p>
                </li>
              </ul>

              <div className="section-actions" style={{ marginTop: 12 }}>
                <a href="/app/trilhas" className="text-link">
                  Ver todas as trilhas
                </a>
                <a href="/app/feedbacks" className="text-link">
                  Ver histórico de feedbacks
                </a>
              </div>
        
              </div>
            </div>
          </div>
        </section>


        {/* TRILHA ATUAL */}
        <section className="section">
          <div className="stack-md">
            <h2 className="section-title">Sua trilha atual</h2>
            <p className="section-subtitle">
              Continue sua jornada resolvendo o próximo micro-desafio.
            </p>

            <div className="card card-soft">
              <p className="card-title">{activeTrack.name}</p>
              <p className="card-subtitle">Progresso da trilha</p>

              {/* Barra de progresso acessível */}
              <div style={{ marginTop: 12 }}>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={Math.round(activeTrack.progress * 100)}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`Progresso da trilha ${activeTrack.name}`}
                >
                  <div
                    className="progress-bar"
                    style={{ width: `${activeTrack.progress * 100}%` }}
                  />
                </div>
              </div>

              <p className="section-subtitle" style={{ marginTop: 8 }}>
                Próximo desafio:{" "}
                <strong>{activeTrack.nextChallenge.title}</strong>
              </p>

              <Link
                href={`/app/trilha/${activeTrack.id}/desafio/${activeTrack.nextChallenge.id}`}
                className="btn btn-lg"
                style={{ marginTop: 12 }}
              >
                Continuar trilha
              </Link>
            </div>
          </div>
        </section>

        {/* FEEDBACKS RECENTES */}
        <section className="section">
          <h2 className="section-title">Últimos feedbacks</h2>

          <ul className="timeline" style={{ marginTop: 12 }}>
            {recentFeedbacks.map((fb) => (
              <li className="timeline-item" key={fb.id}>
                <div className="timeline-badge">✓</div>
                <div className="timeline-content">
                  <div className="feedback-header">
                    <strong>{fb.challengeTitle}</strong>
                    <span className="feedback-score">Score: {fb.score}</span>
                  </div>
                  <p className="feature-text" style={{ marginTop: 2 }}>
                    {fb.comment}
                  </p>
                  <p className="feedback-meta">
                    Avaliado recentemente · visão de empresa / mentor
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
