import { Link } from 'react-router-dom'

function Inicio() {
  return (
    <>
      <main className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">Sua biblioteca pessoal</p>
          <h1 className="hero-title">
            Organize seus
            <br />
            <em>livros favoritos</em>
          </h1>
          <p className="hero-desc">
            Cadastre, acompanhe e filtre sua coleção de livros. Marque o que já
            leu e descubra o que ainda está por vir.
          </p>
          <div className="hero-actions">
            <Link to="/cadastro" className="btn btn-primary">
              Adicionar livro
            </Link>
            <Link to="/listagem" className="btn btn-secondary">
              Ver coleção
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="book-stack">
            <div className="book book-1">
              <span>Romance</span>
            </div>
            <div className="book book-2">
              <span>Ficção</span>
            </div>
            <div className="book book-3">
              <span>Técnico</span>
            </div>
          </div>
        </div>
      </main>

      <section className="features">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">+</div>
              <h3>Cadastre</h3>
              <p>Adicione título, autor, gênero e ano de cada livro da sua coleção.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">☰</div>
              <h3>Filtre</h3>
              <p>Encontre livros por gênero rapidamente na sua listagem.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">✓</div>
              <h3>Acompanhe</h3>
              <p>Marque livros como lidos ou não lidos e acompanhe seu progresso.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio