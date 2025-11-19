// src/app/app/vagas/page.jsx
"use client";

import { useState, useMemo } from "react";
import { mockJobs } from "../../../lib/mockJobs";

export default function VagasPage() {
  const [search, setSearch] = useState("");

  // normaliza texto pra comparar
  const normalize = (str) =>
    str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredJobs = useMemo(() => {
    if (!search.trim()) return mockJobs;

    const term = normalize(search.trim());
    return mockJobs.filter((job) => {
      const haystack = [
        job.title,
        job.company,
        job.area,
        job.seniority,
        ...(job.tags || []),
      ]
        .join(" ")
        .toLowerCase();

      return normalize(haystack).includes(term);
    });
  }, [search]);

  const recommendedJobs = filteredJobs.filter((job) => job.recommended);
  const otherJobs = filteredJobs.filter((job) => !job.recommended);

  return (
    <main className="shell-main page-grid">
      {/* HEADER */}
      <section className="section" aria-labelledby="vagas-title">
        <div className="section-header">
          <p className="section-kicker">Vagas</p>
          <h1 id="vagas-title" className="section-title">
            Oportunidades alinhadas à sua jornada
          </h1>
          <p className="section-subtitle">
            Aqui você encontra vagas que usam exatamente as skills que vem
            praticando nas trilhas e desafios. As recomendações abaixo foram
            geradas com base no perfil do candidato João Ribeiro.
          </p>
        </div>

        {/* BUSCA RÁPIDA */}
        <div className="stack-sm" aria-label="Busca e filtros de vagas">
          <label className="field-label" htmlFor="busca-vagas">
            Buscar por cargo, empresa ou tecnologia
          </label>
          <input
            id="busca-vagas"
            type="search"
            className="field-input"
            placeholder="Ex.: front-end, acessibilidade, remoto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </section>

      {/* VAGAS RECOMENDADAS */}
      <section className="section" aria-labelledby="vagas-recomendadas">
        <div className="section-header">
          <h2 id="vagas-recomendadas" className="section-title">
            Vagas recomendadas para você
          </h2>
          <p className="section-subtitle">
            Baseadas nas trilhas concluídas, desafios avaliados e foco em
            front-end acessível.
          </p>
        </div>

        <div className="stack-md">
          {recommendedJobs.length === 0 && (
            <p className="section-subtitle">
              Nenhuma vaga recomendada encontrada para o filtro atual.
              Limpe a busca ou tente outros termos.
            </p>
          )}

          {recommendedJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>

      {/* TODAS AS VAGAS (FILTRO APLICADO) */}
      <section className="section" aria-labelledby="todas-vagas">
        <div className="section-header">
          <h2 id="todas-vagas" className="section-title">
            Todas as oportunidades
          </h2>
          <p className="section-subtitle">
            Vagas publicadas por empresas parceiras. A compatibilidade indica
            o quanto sua jornada atual conversa com o que a vaga pede.
          </p>
        </div>

        <div className="stack-md">
          {filteredJobs.length === 0 && (
            <p className="section-subtitle">
              Nenhuma vaga encontrada para o termo pesquisado.
              Tente usar palavras mais amplas ou remova o filtro.
            </p>
          )}

          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </section>
    </main>
  );
}

/** Card de vaga reutilizável */
function JobCard({ job }) {
  return (
    <article className="card job-card">
      <div className="job-header">
        <div className="job-main">
          <h3 className="job-title">{job.title}</h3>
          <p className="job-company">
            {job.company} · {job.location}
          </p>
          <p className="job-meta">
            {job.area} · {job.seniority} · {job.modality} · {job.type}
          </p>
        </div>

        <div className="job-match">
          <span className="job-match-value">{job.match}%</span>
          <span className="job-match-label">compatibilidade</span>
        </div>
      </div>

      <p className="job-description">{job.shortDescription}</p>

      <div className="job-footer">
        <div className="chip-row">
          {job.tags?.map((tag) => (
            <span key={tag} className="chip chip-primary">
              {tag}
            </span>
          ))}
        </div>

        <div className="job-footer-right">
          <span className="job-posted">{job.postedAgo}</span>
          <button type="button" className="btn btn-sm">
            Ver detalhes da vaga
          </button>
        </div>
      </div>

      {job.basedOn && (
        <p className="job-based-on">
          Baseado em: <strong>{job.basedOn.join(", ")}</strong>
        </p>
      )}
    </article>
  );
}
