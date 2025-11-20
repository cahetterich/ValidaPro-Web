// src/lib/apiMessages.js

// // Busca TODAS as mensagens
// export async function getAllMessages() {
//   const res = await fetch("http://localhost:3000/api/messages", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Erro ao carregar mensagens");
//   }

//   const data = await res.json();
//   return data.items ?? [];
// }

// // Busca uma mensagem específica pelo id
// export async function getMessageById(id) {
//   const res = await fetch(`http://localhost:3000/api/messages/${id}`, {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Mensagem não encontrada");
//   }

//   return res.json(); // aqui a API já devolve o objeto da conversa direto
// }

// src/lib/apiMessages.js

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || ""; 
// em produção web, pode ficar vazio -> vira "/api/..." 

// Busca TODAS as mensagens
export async function getAllMessages() {
  const res = await fetch(`${API_BASE}/api/messages`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar mensagens");
  }

  const data = await res.json();
  return data.items ?? [];
}

// Busca uma mensagem específica pelo id
export async function getMessageById(id) {
  const res = await fetch(`${API_BASE}/api/messages/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Mensagem não encontrada");
  }

  return res.json();
}
