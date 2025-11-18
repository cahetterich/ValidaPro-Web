// src/lib/mockDashboard.js

export const mockDashboard = {
  user: {
    id: "candidate-1",
    name: "João Ribeiro",
    role: "candidate",
  },
  summary: {
    activeTracks: 1,
    pendingChallenges: 3,
    recentFeedbacks: 1,
  },
  activeTrack: {
    id: "track-front-accessible",
    name: "Front-end Acessível",
    progress: 0.4, // 40%
    nextChallenge: {
      id: "challenge-form-accessible",
      title: "Formulário acessível",
      status: "pending",
    },
  },
  recentFeedbacks: [
    {
      id: "fb-1",
      challengeTitle: "Formulário acessível",
      score: 85,
      comment:
        "Excelente estrutura semântica e boa atenção ao contraste.",
      createdAt: "2025-11-16T10:00:00Z",
    },
    {
      id: "fb-2",
      challengeTitle: "Botões principais",
      score: 78,
      comment: "Boa base, mas faltou foco visível em um dos estados.",
      createdAt: "2025-11-15T19:30:00Z",
    },
  ],
};
