import './InputEmail.css'

// Componente controlado de e-mail.
// Recebe via props: o value (estado do pai), o onChange (atualiza o estado
// do pai) e a mensagem de error (string vazia quando não há erro).
function InputEmail({ value, onChange, error }) {
  return (
    <div className="input-email">
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-erro">{error}</span>}
    </div>
  )
}

export default InputEmail