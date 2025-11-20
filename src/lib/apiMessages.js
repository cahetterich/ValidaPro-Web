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

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof window === "undefined"
    ? "http://localhost:3000"
    : window.location.origin);

// -------------------------------
// Buscar TODAS as mensagens
// -------------------------------
export async function getAllMessages() {
  const res = await fetch(`${BASE_URL}/api/messages`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar mensagens");
  }

  const data = await res.json();
  return data.items ?? [];
}

// -------------------------------
// Buscar mensagem por ID
// -------------------------------
export async function getMessageById(id) {
  const res = await fetch(`${BASE_URL}/api/messages/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Mensagem não encontrada");
  }

  return res.json();
}

