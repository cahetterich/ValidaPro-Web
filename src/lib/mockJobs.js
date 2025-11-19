// src/lib/mockJobs.js

export const mockJobs = [
  {
    id: "job-1",
    title: "Desenvolvedor(a) Front-end Júnior",
    company: "Empresa Parceira Horizonte Digital",
    location: "Remoto · Brasil",
    modality: "Remoto",
    type: "CLT",
    area: "Front-end",
    seniority: "Júnior",
    match: 86, // compatibilidade com o João
    basedOn: ["Trilha Front-end Acessível"],
    tags: ["React", "Acessibilidade", "Formulários", "Design System"],
    shortDescription:
      "Atue em um produto digital focado em acessibilidade, construindo interfaces inclusivas para milhares de pessoas usuárias.",
    postedAgo: "há 3 dias",
    recommended: true,
  },
  {
    id: "job-2",
    title: "Dev Front-end · Acessibilidade web",
    company: "Instituto Futuro do Trabalho",
    location: "Híbrido · São Paulo/SP",
    modality: "Híbrido",
    type: "PJ",
    area: "Front-end",
    seniority: "Júnior/Pleno",
    match: 74,
    basedOn: ["Trilha Front-end Acessível", "Desafios concluídos"],
    tags: ["WCAG", "Componentes reutilizáveis", "Formulários complexos"],
    shortDescription:
      "Colabore com time de UX e produto para elevar a acessibilidade de aplicações web já em produção.",
    postedAgo: "há 1 semana",
    recommended: true,
  },
  {
    id: "job-3",
    title: "Estágio em UX para produtos digitais",
    company: "Startup Jornada Digital",
    location: "Remoto · Brasil",
    modality: "Remoto",
    type: "Estágio",
    area: "UX",
    seniority: "Estágio",
    match: 61,
    basedOn: ["Trilha UX para produtos digitais (concluída)"],
    tags: ["Pesquisa com usuários", "Prototipação", "Documentação"],
    shortDescription:
      "Apoie o time de UX em pesquisas, mapeamento de jornadas e documentação de decisões de design.",
    postedAgo: "há 4 dias",
    recommended: false,
  },
];
