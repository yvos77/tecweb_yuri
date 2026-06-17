import { useState } from 'react'
import './Login.css'
import InputEmail from '../components/InputEmail'
import InputSenha from '../components/InputSenha'

function Login() {
  // 4 estados: o valor de cada campo e a mensagem de erro de cada um.
  const [email, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [errorSenha, setErrorSenha] = useState('')

  // Evento de envio do formulário.
  function handleSubmit(event) {
    event.preventDefault() // evita o recarregamento da página
    let valido = true

    // valida o e-mail
    if (email.trim() === '') {
      setErrorEmail('O campo de email é obrigatório.')
      valido = false
    } else {
      setErrorEmail('')
    }

    // valida a senha
    if (senha.trim() === '') {
      setErrorSenha('O campo de senha é obrigatório.')
      valido = false
    } else {
      setErrorSenha('')
    }

    // se passou na validação, segue o fluxo do login
    if (valido) {
      console.log('Login válido:', { email, senha })
    }
  }

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit} noValidate>
        <div className="login-logo">
          <svg viewBox="0 0 24 24" width="52" height="52" fill="currentColor" aria-hidden="true">
            <path d="M12 3 1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
          </svg>
        </div>
        <h1 className="login-titulo">Aluno Online</h1>

        {/* O estado (email/senha) desce via props; o onChange sobe a alteração */}
        <InputEmail
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errorEmail}
        />
        <InputSenha
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          error={errorSenha}
        />

        <button type="submit" className="login-btn">
          Entrar
        </button>
      </form>

      <p className="login-rodape">© 2026. Todos os direitos reservados.</p>
    </div>
  )
}

export default Login