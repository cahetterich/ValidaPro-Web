// src/lib/mockMessages.js

export const mockMessages = [
  {
    id: "1",
    title: "Feedback sobre o desafio de formulário acessível",
    snippet:
      "Gostei bastante da forma como você trabalhou contraste e foco visível...",
    authorName: "Mentora Ana",
    authorRole: "Empresa parceira",
    avatarInitials: "A",
    avatarType: "mentor", // mentor | system
    isUnread: true,
    timeAgo: "2 dias atrás",
    thread: [
      {
        id: "m1",
        from: "system",
        author: "ValidaPro · Sistema",
        time: "há 3 dias",
        text: "Seu desafio de formulário acessível foi enviado para avaliação da mentora Ana.",
      },
      {
        id: "m2",
        from: "mentor",
        author: "Ana · Mentora",
        time: "há 2 dias",
        text: "Gostei bastante da forma como você trabalhou contraste e foco visível. A estrutura dos rótulos também está clara.",
      },
      {
        id: "m3",
        from: "mentor",
        author: "Ana · Mentora",
        time: "há 2 dias",
        text: "Próximo passo: testar o fluxo todo só com teclado e revisar mensagens de erro para casos de campo vazio.",
      },
      {
        id: "m4",
        from: "candidate",
        author: "Você",
        time: "há 1 dia",
        text: "Obrigada pelo feedback! Vou revisar a parte de mensagens de erro e reenviar uma nova versão.",
      },
    ],
  },
  {
    id: "2",
    title: "Bem-vindo à sua jornada de validação",
    snippet:
      "Aqui vão algumas dicas para aproveitar melhor seus primeiros desafios...",
    authorName: "ValidaPro",
    authorRole: "Sistema",
    avatarInitials: "V",
    avatarType: "system",
    isUnread: false,
    timeAgo: "5 dias atrás",
    thread: [
      {
        id: "m1",
        from: "system",
        author: "ValidaPro · Sistema",
        time: "há 5 dias",
        text: "Bem-vindo(a) à sua jornada de validação! A cada desafio, você recebe feedback estruturado de mentores e empresas.",
      },
      {
        id: "m2",
        from: "system",
        author: "ValidaPro · Sistema",
        time: "há 5 dias",
        text: "Dica: comece por uma trilha menor, finalize o primeiro desafio e só depois avance para desafios mais longos.",
      },
    ],
  },
];
