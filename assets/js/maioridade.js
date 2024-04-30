function verificarIdade() {
    var idade = prompt("Por favor, informe sua idade:");

    if (idade >= 18) {
      window.location = "../VinheriaAgnello-main/pages/home.html";
    } else {
      window.location.href = "//google.com";
    }
  }