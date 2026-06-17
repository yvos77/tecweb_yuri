import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLivros } from '../context/LivrosContext.jsx'
import CardLivro from '../components/CardLivro.jsx'

const FILTROS = ['Todos', 'Ficção', 'Romance', 'Técnico', 'Outro']

function Listagem() {
  const { livros, carregando, erro, alternarLido } = useLivros()
  const [filtro, setFiltro] = useState('Todos')

  // Aplica o filtro por gênero.
  const lista = filtro === 'Todos' ? livros : livros.filter((l) => l.genero === filtro)
  const contador = lista.length === 1 ? '1 livro' : `${lista.length} livros`

  return (
    <>
      <header className="page-header">
        <h1>Minha estante</h1>
        <p>Todos os livros que você adicionou aparecem aqui.</p>
      </header>

      <div className="listagem-container">
        <div className="listagem-toolbar">
          <div className="toolbar-left">
            <h2>Coleção</h2>
            <span className="contador-livros">{contador}</span>
          </div>

          <div className="filtro-grupo">
            {FILTROS.map((f) => (
              <button
                key={f}
                className={`filtro-btn${filtro === f ? ' ativo' : ''}`}
                onClick={() => setFiltro(f)}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {carregando && <p className="lista-vazia">Carregando livros...</p>}
        {erro && <p className="lista-vazia">Erro ao carregar: {erro}</p>}

        {!carregando && !erro && (
          <div className="livros-grid">
            {lista.length === 0 ? (
              <div className="lista-vazia">
                <strong>Nenhum livro encontrado.</strong>
                <p>
                  Adicione livros pela página de <Link to="/cadastro">cadastro</Link>.
                </p>
              </div>
            ) : (
              lista.map((livro) => (
                <CardLivro key={livro.id} livro={livro} onAlternarLido={alternarLido} />
              ))
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Listagem