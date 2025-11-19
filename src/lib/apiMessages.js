// export async function getAllMessages() {
//   const res = await fetch("http://localhost:3000/api/messages", {  //produção
//     cache: "no-store", // sempre pega os dados atualizados
//   });

//   if (!res.ok) {
//     throw new Error("Erro ao carregar mensagens");
//   }

//   // API retorna um array
//   const data = await res.json();
//   return data;
// }

// // mensagem id 
// export async function getMessageById(id) {
//   const res = await fetch(`http://localhost:3000/api/messages/${id}`, { //produção
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Mensagem não encontrada");
//   }

  
//   const data = await res.json();
//   return data;
// }

// src/lib/apiMessages.js

// Busca TODAS as mensagens
export async function getAllMessages() {
  const res = await fetch("http://localhost:3000/api/messages", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Erro ao carregar mensagens");
  }

  const data = await res.json();
  // 👇 devolve só o array
  return data.items ?? [];
}

// Busca uma mensagem específica pelo id
export async function getMessageById(id) {
  const res = await fetch(`http://localhost:3000/api/messages/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Mensagem não encontrada");
  }

  return res.json(); // aqui a API já devolve o objeto da conversa direto
}
