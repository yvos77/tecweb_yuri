import { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { listarLivros, criarLivro, atualizarLivro } from '../services/api.js'

const LivrosContext = createContext(null)

export function LivrosProvider({ children }) {
  const [livros, setLivros] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(null)

  const carregarLivros = useCallback(async () => {
    setCarregando(true)
    setErro(null)
    try {
      const dados = await listarLivros()
      setLivros(dados)
    } catch (e) {
      setErro(e.message)
      setLivros([])
    } finally {
      setCarregando(false)
    }
  }, [])

  useEffect(() => {
    carregarLivros()
  }, [carregarLivros])

  async function adicionarLivro(livro) {
    const novo = await criarLivro({ ...livro, lido: false })
    setLivros((atuais) => [...atuais, novo])
    return novo
  }

  async function alternarLido(id) {
    const alvo = livros.find((l) => l.id === id)
    if (!alvo) return
    const atualizado = await atualizarLivro(id, { ...alvo, lido: !alvo.lido })
    setLivros((atuais) => atuais.map((l) => (l.id === id ? atualizado : l)))
  }

  const valor = { livros, carregando, erro, carregarLivros, adicionarLivro, alternarLido }

  return <LivrosContext.Provider value={valor}>{children}</LivrosContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLivros() {
  const contexto = useContext(LivrosContext)
  if (contexto === null) {
    throw new Error('useLivros precisa estar dentro de <LivrosProvider>.')
  }
  return contexto
}