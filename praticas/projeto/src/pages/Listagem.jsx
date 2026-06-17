const FILTROS = ['Todos', 'Ficção', 'Romance', 'Técnico', 'Outro']

// Estrutura base da listagem. Consumo do Context, renderização dos cards
// e filtro funcional entram nas issues #13 e #14.
function Listagem() {
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
            <span className="contador-livros"></span>
          </div>

          <div className="filtro-grupo">
            {FILTROS.map((f) => (
              <button key={f} className={`filtro-btn${f === 'Todos' ? ' ativo' : ''}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="livros-grid">
          {/* Os cards de livros serão renderizados aqui (#13) */}
        </div>
      </div>
    </>
  )
}

export default Listagem