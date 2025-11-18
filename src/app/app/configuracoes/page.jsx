// src/app/app/configuracoes/page.jsx
export default function ConfiguracoesPage() {
  return (
    <div className="page-grid">
      {/* HEADER */}
      <section className="section" aria-labelledby="settings-title">
        <div className="section-header">
          <p className="section-kicker">Configurações</p>
          <h1 id="settings-title" className="section-title">
            Preferências da sua conta
          </h1>
          <p className="section-subtitle">
            Ajuste como o ValidaPro se comporta para você: perfil, notificações
            e acessibilidade. No MVP é tudo local, depois conectamos com a API.
          </p>
        </div>
      </section>

      {/* PERFIL + NOTIFICAÇÕES + ACESSIBILIDADE */}
      <section className="section" aria-label="Configurações da conta">
        <div className="grid-2">
          {/* Coluna 1 – Perfil */}
          <div className="stack-md">
            <div className="card card-soft">
              <div className="card-header">
                <p className="card-title">Perfil</p>
                <p className="card-subtitle">
                  Informações básicas usadas em trilhas e feedbacks.
                </p>
              </div>

              <div className="stack-sm">
                <label className="stack-xs">
                  <span className="section-subtitle">Nome exibido</span>
                  <input
                    type="text"
                    defaultValue="João Ribeiro"
                    className="input"
                    aria-describedby="nome-ajuda"
                  />
                  <span
                    id="nome-ajuda"
                    className="feedback-meta"
                    style={{ marginTop: 2 }}
                  >
                    Esse nome aparece para mentores e empresas.
                  </span>
                </label>

                <label className="stack-xs">
                  <span className="section-subtitle">E-mail de acesso</span>
                  <input
                    type="email"
                    defaultValue="joao.ribeiro@provedor.com"
                    className="input"
                  />
                </label>
              </div>
            </div>

            <div className="card card-soft">
              <div className="card-header">
                <p className="card-title">Notificações</p>
                <p className="card-subtitle">
                  Controle como você quer ser avisado sobre sua jornada.
                </p>
              </div>

              <div className="stack-sm">
                <label className="stack-xs">
                  <input type="checkbox" defaultChecked />{" "}
                  <span>Receber e-mails sobre novos feedbacks</span>
                </label>
                <label className="stack-xs">
                  <input type="checkbox" defaultChecked />{" "}
                  <span>Receber lembretes de prazo de desafios</span>
                </label>
                <label className="stack-xs">
                  <input type="checkbox" />{" "}
                  <span>Receber novidades sobre novas trilhas</span>
                </label>
              </div>
            </div>
          </div>

          {/* Coluna 2 – Acessibilidade e sessão */}
          <div className="stack-md">
            <div className="card card-soft">
              <div className="card-header">
                <p className="card-title">Acessibilidade</p>
                <p className="card-subtitle">
                  Ajustes de conforto visual e leitura. Esses mesmos padrões
                  serão aplicados no app mobile.
                </p>
              </div>

              <div className="stack-sm">
                <label className="stack-xs">
                  <span className="section-subtitle">Tamanho do texto</span>
                  <select className="input">
                    <option>Padrão</option>
                    <option>Aumentar um pouco</option>
                    <option>Aumentar bastante</option>
                  </select>
                </label>

                <label className="stack-xs">
                  <span className="section-subtitle">Tema</span>
                  <select className="input">
                    <option>Claro (recomendado)</option>
                    <option>Alto contraste</option>
                  </select>
                </label>

                <label className="stack-xs">
                  <input type="checkbox" />{" "}
                  <span>Reduzir animações e transições visuais</span>
                </label>
              </div>
            </div>

            <div className="card card-muted">
              <div className="card-header">
                <p className="card-title">Sessão e segurança</p>
              </div>
              <p className="feature-text">
                No MVP o login é simplificado. Na versão conectada à API, essa
                área permitirá encerrar sessões ativas, trocar senha e gerenciar
                dispositivos conectados.
              </p>
            </div>
          </div>
        </div>

        <div className="section-actions" style={{ marginTop: 16 }}>
          <button type="button" className="btn btn-lg">
            Salvar alterações (demo)
          </button>
          <span className="feedback-meta">
            As alterações aqui são apenas demonstrativas nesta versão.
          </span>
        </div>
      </section>
    </div>
  );
}
