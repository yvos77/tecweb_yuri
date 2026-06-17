import { useState } from 'react'
import { useLivros } from '../context/LivrosContext.jsx'

const GENEROS = ['Ficção', 'Romance', 'Técnico', 'Outro']
const ANO_ATUAL = new Date().getFullYear()
const FORM_VAZIO = { titulo: '', autor: '', genero: '', ano: '' }

function Cadastro() {
  const { adicionarLivro } = useLivros()

  const [form, setForm] = useState(FORM_VAZIO)
  const [erros, setErros] = useState({})
  const [sucesso, setSucesso] = useState(false)
  const [enviando, setEnviando] = useState(false)

  function aoMudar(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function validar(dados) {
    const novos = {}
    if (!dados.titulo.trim()) novos.titulo = 'O título é obrigatório.'
    if (!dados.autor.trim()) novos.autor = 'O autor é obrigatório.'
    if (!dados.genero) novos.genero = 'Selecione um gênero.'

    const ano = Number(dados.ano)
    if (!dados.ano.trim() || Number.isNaN(ano) || ano < 1000 || ano > ANO_ATUAL) {
      novos.ano = `Informe um ano válido entre 1000 e ${ANO_ATUAL}.`
    }
    return novos
  }

  async function aoEnviar(e) {
    e.preventDefault()
    setSucesso(false)

    const novos = validar(form)
    setErros(novos)
    if (Object.keys(novos).length > 0) return

    setEnviando(true)
    try {
      await adicionarLivro({
        titulo: form.titulo.trim(),
        autor: form.autor.trim(),
        genero: form.genero,
        ano: Number(form.ano),
      })
      setForm(FORM_VAZIO)
      setErros({})
      setSucesso(true)
      setTimeout(() => setSucesso(false), 3000)
    } catch (err) {
      setErros({ geral: `Erro ao salvar: ${err.message}` })
    } finally {
      setEnviando(false)
    }
  }

  function limpar() {
    setForm(FORM_VAZIO)
    setErros({})
    setSucesso(false)
  }

  return (
    <>
      <header className="page-header">
        <h1>Cadastrar livro</h1>
        <p>Preencha os campos abaixo para adicionar um livro à sua estante.</p>
      </header>

      <div className="form-container">
        <div className="form-card">
          {sucesso && (
            <div className="form-success visivel">Livro adicionado com sucesso!</div>
          )}

          <form onSubmit={aoEnviar} noValidate>
            <div className="form-group">
              <label htmlFor="titulo">Título do livro *</label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                placeholder="Ex: O Senhor dos Anéis"
                className={erros.titulo ? 'campo-erro' : ''}
                value={form.titulo}
                onChange={aoMudar}
              />
              <span className="mensagem-erro">{erros.titulo}</span>
            </div>

            <div className="form-group">
              <label htmlFor="autor">Autor *</label>
              <input
                type="text"
                id="autor"
                name="autor"
                placeholder="Ex: J.R.R. Tolkien"
                className={erros.autor ? 'campo-erro' : ''}
                value={form.autor}
                onChange={aoMudar}
              />
              <span className="mensagem-erro">{erros.autor}</span>
            </div>

            <div className="form-group">
              <label htmlFor="genero">Gênero *</label>
              <select
                id="genero"
                name="genero"
                className={erros.genero ? 'campo-erro' : ''}
                value={form.genero}
                onChange={aoMudar}
              >
                <option value="">Selecione um gênero</option>
                {GENEROS.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <span className="mensagem-erro">{erros.genero}</span>
            </div>

            <div className="form-group">
              <label htmlFor="ano">Ano de publicação *</label>
              <input
                type="number"
                id="ano"
                name="ano"
                placeholder="Ex: 1954"
                min="1000"
                max={ANO_ATUAL}
                className={erros.ano ? 'campo-erro' : ''}
                value={form.ano}
                onChange={aoMudar}
              />
              <span className="mensagem-erro">{erros.ano}</span>
            </div>

            {erros.geral && <span className="mensagem-erro">{erros.geral}</span>}

            <div className="form-actions">
              <button type="submit" className="btn btn-primary" disabled={enviando}>
                {enviando ? 'Salvando...' : 'Adicionar livro'}
              </button>
              <button type="button" className="btn btn-secondary" onClick={limpar}>
                Limpar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro