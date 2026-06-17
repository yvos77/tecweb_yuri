// api.js — consumo da API REST local (json-server).
// Suba a API com `npm run api` (ou `npm run dev:all`): ela roda em
// http://localhost:3000 e lê/escreve no arquivo db.json.

const BASE_URL = 'http://localhost:3000'
const RECURSO = `${BASE_URL}/livros`

async function tratar(resposta) {
  if (!resposta.ok) {
    throw new Error(`Erro na API (status ${resposta.status})`)
  }
  return resposta.json()
}

// GET /livros -> lista todos os livros
export async function listarLivros() {
  return tratar(await fetch(RECURSO))
}

// POST /livros -> cria um novo livro
export async function criarLivro(livro) {
  return tratar(
    await fetch(RECURSO, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro),
    })
  )
}

// PUT /livros/:id -> atualiza um livro existente
export async function atualizarLivro(id, dados) {
  return tratar(
    await fetch(`${RECURSO}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
  )
}

// DELETE /livros/:id -> remove um livro
export async function removerLivro(id) {
  return tratar(await fetch(`${RECURSO}/${id}`, { method: 'DELETE' }))
}