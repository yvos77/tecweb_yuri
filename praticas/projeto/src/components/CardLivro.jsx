// Card de um livro, com botão de alternar lido/não lido.
import './CardLivro.css'

function CardLivro({ livro, onAlternarLido }) {
  return (
    <div className={`card-livro${livro.lido ? ' lido' : ''}`}>
      <h3 className="card-titulo">{livro.titulo}</h3>
      <p className="card-autor">{livro.autor}</p>

      <div className="card-meta">
        <span className="badge-genero">{livro.genero}</span>
        <span className={`badge-status ${livro.lido ? 'lido' : 'nao-lido'}`}>
          {livro.lido ? 'Lido' : 'Não lido'}
        </span>
        <span className="card-ano">{livro.ano}</span>
      </div>

      <div className="card-actions">
        <button className="btn btn-outline" onClick={() => onAlternarLido(livro.id)}>
          {livro.lido ? 'Marcar como não lido' : 'Marcar como lido'}
        </button>
      </div>
    </div>
  )
}

export default CardLivro