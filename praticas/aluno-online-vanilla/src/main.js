// 1. Selecionando os elementos do formulário
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Limpando mensagens de erro
    emailError.textContent = '';
    passwordError.textContent = '';

    let hasError = false;

    // Pegando os valores digitados
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    // Validação Avançada do E-mail
    
    // Expressão Regular (Regex) que aceita qualquer formato válido de e-mail
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
      emailError.textContent = 'O campo de e-mail é obrigatório.';
      hasError = true;
    } else if (!emailPattern.test(emailValue)) {
      // O método .test() verifica se o texto digitado combina com o padrão do Regex
      emailError.textContent = 'Por favor, insira um e-mail válido. ( deve conter "@" e domínio)';
      hasError = true;
    }

    // Validação Avançada da Senha
    if (passwordValue === '') {
      passwordError.textContent = 'O campo de senha é obrigatório.';
      hasError = true;
    } else if (passwordValue.length < 6) {
      // Se não estiver vazia, checa se tem menos de 6 caracteres
      passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
      hasError = true;
    }

    // Se passou em todas as validações, redireciona
    if (!hasError) {
      console.log('Validado com sucesso! Redirecionando...');
      window.location.href = 'index.html'; 
    }
  });
}