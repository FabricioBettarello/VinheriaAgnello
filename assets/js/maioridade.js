function verificarIdade() {
    var idade = prompt("Por favor, informe sua idade:");

    if (idade >= 18) {
      window.location = "../pages/home.html";
    } else {
      window.location.href = "//google.com";
    }
  }
  window.unload = verificarIdade();
