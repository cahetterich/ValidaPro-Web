// src/app/(marketing)/page.jsx

export default function Page() {
  return (
    <div className="page-grid">
      {/* HERO */}
      <section className="section hero" aria-labelledby="hero-title">
        <div className="section-header">
          <p className="section-kicker">
            Plataforma para recolocação · Futuro do trabalho
          </p>
          <h1 id="hero-title" className="hero-title">
            ValidaPro: desafios práticos que viram evidência de skill.
          </h1>
          <p className="hero-subtitle">
            Para profissionais em recolocação que precisam provar competência
            rápido. Você resolve desafios reais, mentores avaliam e empresas
            enxergam entregas — não apenas um currículo.
          </p>
        </div>

        <div className="hero-actions" aria-label="Ações principais">
          <a className="btn btn-lg" href="/login?role=mentor">
            Já tenho conta
          </a>
          <a className="btn btn-secondary btn-lg" href="/criar-conta">
            Começar como candidato
          </a>
        </div>

        <div className="chip-row" aria-label="Benefícios em destaque">
          <span className="chip chip-primary">Evidência prática</span>
          <span className="chip">Feedback estruturado</span>
          <span className="chip">Trilhas curtas</span>
          <span className="chip">Integração app + web</span>
        </div>

      </section>

      {/* POR QUE EXISTE */}
      <section
        className="section"
        aria-labelledby="section-why"
        id="porque-existe"
      >
        <div className="section-header">
          <h2 id="section-why" className="section-title">
            Por que o ValidaPro existe?
          </h2>
          <p className="section-subtitle">
            Ajudamos pessoas em recolocação a sair da fila de currículos e
            entrar em uma fila de desafios práticos, com critérios claros e
            avaliação guiada.
          </p>
        </div>

        <div className="grid-3">
          <article className="feature-card">
            <h3 className="feature-title">Para candidatos</h3>
            <p className="feature-text">
              Trilhas curtas, desafios focados e espaço para explicar decisões
              em texto, vídeo ou áudio. Ideal para quem está mudando de área
              ou voltando ao mercado.
            </p>
          </article>

          <article className="feature-card">
            <h3 className="feature-title">Para empresas</h3>
            <p className="feature-text">
              Painel com submissões, scores e histórico de desafios. Menos
              entrevista genérica, mais análise de entregas reais e
              consistentes.
            </p>
          </article>

          <article className="feature-card">
            <h3 className="feature-title">Para mentores</h3>
            <p className="feature-text">
              Fluxo simples para avaliar, pontuar e registrar feedback que
              realmente ajuda a pessoa candidata a evoluir de um desafio para
              o outro.
            </p>
          </article>
        </div>
      </section>

           {/* COMO FUNCIONA NA PRÁTICA */}
      <section
        className="section"
        aria-labelledby="section-how"
        id="como-funciona"
      >
        <div className="section-columns">
          {/* Coluna esquerda: passos para a pessoa candidata */}
          <div className="stack-md">
            <div className="section-header">
              <h2 id="section-how" className="section-title">
                Como funciona na prática
              </h2>
              <p className="section-subtitle">
                Em poucos passos, você sai só do currículo e passa a mostrar
                entregas reais. Tudo acontece pela mesma conta, no app e na
                plataforma web.
              </p>
            </div>

            <ul className="timeline">
              <li className="timeline-item">
                <div className="timeline-badge">1</div>
                <div className="timeline-content">
                  <strong>Crie seu acesso</strong>
                  <span>
                    Entre como <b>candidato</b>, informe alguns dados básicos e
                    escolha a área em que quer se validar (ex.: front-end,
                    back-end, produto digital).
                  </span>
                </div>
              </li>

              <li className="timeline-item">
                <div className="timeline-badge">2</div>
                <div className="timeline-content">
                  <strong>Escolha uma trilha de desafios</strong>
                  <span>
                    Cada trilha reúne <b>micro-desafios práticos</b> com tempo
                    estimado, nível de dificuldade e o que será avaliado.
                  </span>
                </div>
              </li>

              <li className="timeline-item">
                <div className="timeline-badge">3</div>
                <div className="timeline-content">
                  <strong>Resolva e envie suas evidências</strong>
                  <span>
                    Você entrega código, links, arquivos e, se quiser,
                    <b> vídeo/áudio explicando sua solução</b>. Tudo fica
                    registrado na sua jornada.
                  </span>
                </div>
              </li>

              <li className="timeline-item">
                <div className="timeline-badge">4</div>
                <div className="timeline-content">
                  <strong>Receba score e feedback guiado</strong>
                  <span>
                    Mentores e empresas avaliam, dão <b>score por critério</b> e
                    deixam comentários objetivos sobre o que está bom e o que
                    pode evoluir para o próximo desafio.
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Coluna direita: visão de quem avalia / consistência app+web */}
          <div className="stack-md">
            <div className="success-surface">
              <strong>O que empresas e mentores veem</strong>
              <p className="success-note">
                Na visão de avaliação, cada desafio aparece com as suas
                evidências, histórico de tentativas e progresso na trilha. Isso
                facilita comparar candidatos pela <b>entrega real</b>, não só
                pelo currículo.
              </p>
            </div>

            <div className="card card-soft">
              <p className="card-title">Experiência consistente em app e web</p>
              <p className="feature-text">
                Você pode começar um desafio no app mobile, continuar no
                computador e acompanhar os feedbacks nas duas interfaces. A
                identidade visual, trilhas e critérios são os mesmos, mudando
                só o tamanho da tela.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* PARA EMPRESAS / MENTORES */}
      <section
        className="section section--muted"
        aria-labelledby="section-companies"
        id="para-empresas"
      >
        <div className="section-header">
          <h2 id="section-companies" className="section-title">
            Para empresas e mentores
          </h2>
          <p className="section-subtitle">
            Um painel simples para avaliar desafios, comparar entregas e
            identificar quem está pronto para a próxima etapa — sem perder
            tempo em entrevistas genéricas.
          </p>
        </div>

        <div className="grid-2">
          <div className="stack-md">
            <div className="card card-soft">
              <div className="card-header">
                <p className="card-title">Painel de avaliações</p>
                <p className="card-subtitle">
                  Submissões organizadas por trilha, desafio e status.
                </p>
              </div>
              <p className="feature-text">
                Veja rapidamente quem entregou, quais desafios ainda estão
                pendentes e qual foi o score de cada pessoa candidata ao longo
                da jornada.
              </p>
            </div>

            <div className="card card-soft">
              <div className="card-header">
                <p className="card-title">Feedback acionável</p>
                <p className="card-subtitle">
                  Estrutura pensada para comentários claros e objetivos.
                </p>
              </div>
              <p className="feature-text">
                Em vez de um “não foi dessa vez”, a plataforma incentiva
                feedbacks que deixam claro o que foi bom, o que precisa melhorar
                e qual o próximo passo.
              </p>
            </div>
          </div>

          <div className="stack-md">
            <div className="warning-surface">
              <strong>Modo piloto para empresas</strong>
              <p className="success-note">
                Na primeira versão, o ValidaPro pode ser usado por um pequeno
                grupo de mentores e recrutadores para validar o modelo com uma
                turma de candidatos em recolocação.
              </p>
            </div>

            <p className="feature-text">
              A integração com o app mobile garante que a pessoa candidata
              acompanhe em tempo quase real o resultado de cada desafio,
              fortalecendo a percepção de transparência do processo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

