import './InputSenha.css'

// Componente controlado de senha.
// Recebe via props: value, onChange e a mensagem de error.
function InputSenha({ value, onChange, error }) {
  return (
    <div className="input-senha">
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        value={value}
        onChange={onChange}
      />
      {error && <span className="input-erro">{error}</span>}
    </div>
  )
}

export default InputSenha