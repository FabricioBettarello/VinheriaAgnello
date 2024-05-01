function verificarIdade() {
    var idade = prompt("Por favor, informe sua idade:");

    if (idade >= 18) {
      // Redirecionar para a página inicial
      window.location = "../pages/home.html";
    } else {
      // Redirecionar para o Google
      window.location.href = "//google.com";
    }
  }
  window.unload = verificarIdade();