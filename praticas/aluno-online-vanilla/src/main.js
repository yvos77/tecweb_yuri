const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

if (loginForm) {
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    emailError.textContent = '';
    passwordError.textContent = '';

    let hasError = false;

    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailValue === '') {
      emailError.textContent = 'O campo de e-mail é obrigatório.';
      hasError = true;
    } else if (!emailPattern.test(emailValue)) {
      emailError.textContent = 'Por favor, insira um e-mail válido. ( deve conter "@" e domínio)';
      hasError = true;
    }

    if (passwordValue === '') {
      passwordError.textContent = 'O campo de senha é obrigatório.';
      hasError = true;
    } else if (passwordValue.length < 6) {
      passwordError.textContent = 'A senha deve ter no mínimo 6 caracteres.';
      hasError = true;
    }

    if (!hasError) {
      console.log('Validado com sucesso! Redirecionando...');
      window.location.href = 'index.html'; 
    }
  });
}