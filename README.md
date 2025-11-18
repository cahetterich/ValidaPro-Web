# ValidaPro — WEB (rotas apenas)

Este pacote contém **apenas as rotas** do projeto (páginas e APIs) como stubs.

## Rodar
```bash
npm i
npm run dev
```

## Rotas de Páginas
- `/` (landing)
- `/login`
- `/app`
- `/app/tracks`
- `/app/challenges`
- `/app/challenges/[id]`
- `/app/submit`
- `/app/review`
- `/app/user`

## Rotas de API (stubs)
- `GET /api/tracks` → `{ tracks: [] }`
- `GET /api/challenges` → `{ challenges: [] }`
- `GET /api/challenges/[id]` → `{ challenge: null }`
- `GET/POST /api/submissions` → lista vazia / eco do payload
- `GET/POST /api/reviews` → lista vazia / eco do payload
- `POST /api/uploads/sign` → `{ url: 'https://upload.mock/url' }`
