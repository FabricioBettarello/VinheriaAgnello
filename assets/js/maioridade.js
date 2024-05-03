function verificarIdade() {
    var idade = prompt("Por favor, informe sua idade:");

    if (idade >= 18) {
      window.location = "https://fabriciobettarello.github.io/VinheriaAgnello/pages/home.html";
    } else {
      window.location.href = "https://google.com";
    }
  }
  window.unload = verificarIdade();
