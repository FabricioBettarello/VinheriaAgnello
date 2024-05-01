let total = 0;
let produtosSelecionados = [];

function adicionarProduto(nome, preco) {
    produtosSelecionados.push({ nome: nome, preco: preco });
    total += preco;
    alert(`${nome} adicionado ao carrinho!`);
    atualizarListaProdutos();
    atualizarTotal();
}

function atualizarListaProdutos() {
    const lista = document.getElementById("listaProdutos");
    lista.innerHTML = "";
    produtosSelecionados.forEach(produto => {
        const item = document.createElement("li");
        item.textContent = `${produto.nome} - $${produto.preco}`;
        lista.appendChild(item);
    });
}

function atualizarTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total}`;
}

function aplicarDesconto() {
    const cupomInput = document.getElementById("cupomDesconto").value;
    const cupomValido = "FIAP2024"; 
    
    if (cupomInput === cupomValido) {
        total *= 0.9; 
        alert("Cupom aplicado! 10% de desconto concedido.");
        atualizarTotal();
    } else {
        alert("Cupom inválido.");
    }
}

function atualizarTotal() {
    const totalElement = document.getElementById("total");
    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}
