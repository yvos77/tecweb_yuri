const GENEROS = ['Ficção', 'Romance', 'Técnico', 'Outro']

// Estrutura visual do formulário. Estado, validação e POST entram nas
// issues #10, #11 e #12 (Gabriel).
function Cadastro() {
  return (
    <>
      <header className="page-header">
        <h1>Cadastrar livro</h1>
        <p>Preencha os campos abaixo para adicionar um livro à sua estante.</p>
      </header>

      <div className="form-container">
        <div className="form-card">
          <form noValidate>
            <div className="form-group">
              <label htmlFor="titulo">Título do livro *</label>
              <input type="text" id="titulo" name="titulo" placeholder="Ex: O Senhor dos Anéis" />
              <span className="mensagem-erro"></span>
            </div>

            <div className="form-group">
              <label htmlFor="autor">Autor *</label>
              <input type="text" id="autor" name="autor" placeholder="Ex: J.R.R. Tolkien" />
              <span className="mensagem-erro"></span>
            </div>

            <div className="form-group">
              <label htmlFor="genero">Gênero *</label>
              <select id="genero" name="genero" defaultValue="">
                <option value="">Selecione um gênero</option>
                {GENEROS.map((g) => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
              <span className="mensagem-erro"></span>
            </div>

            <div className="form-group">
              <label htmlFor="ano">Ano de publicação *</label>
              <input type="number" id="ano" name="ano" placeholder="Ex: 1954" min="1000" />
              <span className="mensagem-erro"></span>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary">Adicionar livro</button>
              <button type="button" className="btn btn-secondary">Limpar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Cadastro