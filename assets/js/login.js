function checkLogin() {
    const emailValue = document.getElementById('emailInput').value;
    const passwordValue = document.getElementById('passwordInput').value;

    if (emailValue === '1234' && passwordValue === '1234') {
        alert('Login realizado com sucesso!');
    } else {
        alert('Login incorreto. Verifique suas credenciais.');
    }
}