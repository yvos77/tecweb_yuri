import { useState } from 'react'
import { NavLink } from 'react-router-dom'

// Menu com NavLink (link ativo automático) e botão hamburguer no mobile.
function Navbar() {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)
  const classe = ({ isActive }) => (isActive ? 'nav-link ativo' : 'nav-link')

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo" onClick={fechar}>
        Estante Digital
      </NavLink>

      <ul className={`nav-links${aberto ? ' aberto' : ''}`}>
        <li>
          <NavLink to="/" className={classe} end onClick={fechar}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/cadastro" className={classe} onClick={fechar}>
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink to="/listagem" className={classe} onClick={fechar}>
            Listagem
          </NavLink>
        </li>
      </ul>

      <button
        className="nav-toggle"
        aria-label="Abrir menu"
        aria-expanded={aberto}
        onClick={() => setAberto((a) => !a)}
      >
        {aberto ? '×' : '☰'}
      </button>
    </nav>
  )
}

export default Navbar