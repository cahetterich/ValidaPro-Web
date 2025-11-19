# ValidaPro – Plataforma de desafios práticos para recolocação

ValidaPro é uma plataforma web que ajuda pessoas em recolocação a **provar suas skills na prática**, por meio de trilhas de desafios avaliadas por mentores e empresas.

Este repositório contém a **versão web (Next.js)** da solução, focada em:

- Landing page pública explicando a proposta do produto  
- Área logada do candidato, com:
  - Dashboard da jornada
  - Lista de trilhas em andamento / concluídas
  - Caixa de mensagens com mentores e sistema
- API interna (mock) para mensagens, já pensada para futura integração com o app mobile (React Native / Expo).

---

## 🧩 Tecnologias principais

- [Next.js 14](https://nextjs.org/) (App Router)
- React
- CSS puro (design system próprio com `globals.css` + `components-*.css`)
- API Routes do Next.js (`/app/api/...`) para simular o backend de mensagens

---

## 📂 Estrutura geral do projeto

Principais pastas e arquivos:

```txt
src/
  app/
    (marketing)/
      page.jsx           # Landing page pública
      layout.jsx         # Layout com PublicHeader + PublicFooter

    app/
      layout.jsx         # Layout da área logada (AppHeader + AppFooter)
      page.jsx           # Dashboard "Minha jornada"
      trilhas/
        page.jsx         # Listagem de trilhas
      mensagens/
        page.jsx         # Inbox
        [id]/
          page.jsx       # Detalhe da conversa
          MensagemThreadClient.jsx
      api/
        messages/
          route.js       # GET /api/messages
        messages/[id]/
          route.js       # GET /api/messages/:id e POST /api/messages/:id

  components/
    PublicHeader.jsx
    PublicFooter.jsx
    AppHeader.jsx
    AppFooter.jsx
    MessageReplyForm.jsx

  lib/
    mockMessages.js      # Mock local com conversas e mensagens
    apiMessages.js       # Helpers para consumir a API interna

  styles/
    globals.css          # Tokens, reset e estilos base
    components.css       # Estilos gerais de UI
    components-messages.css
    components-tracks.css
