import { Routes, Route } from 'react-router-dom'
import { LivrosProvider } from './context/LivrosContext.jsx'
import Navbar from './components/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import Cadastro from './pages/Cadastro.jsx'
import Listagem from './pages/Listagem.jsx'

function App() {
  return (
    <LivrosProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </LivrosProvider>
  )
}

export default App