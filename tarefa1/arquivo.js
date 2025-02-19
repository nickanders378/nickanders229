const produtos = [
    { nome: "Produto 1", preco: 19.00, imagem: "produto1.jpg" },
    { nome: "Produto 2", preco: 33.00, imagem: "produto2.jpg" },
    { nome: "Produto 3", preco: 68.00, imagem: "produto3.jpg" },
    
];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalElement = document.getElementById("total");

let carrinho = [];

function exibirProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, index) => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

exibirProdutos();