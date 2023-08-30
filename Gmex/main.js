//Fazendo varios cards a partir do inicial feito em html;
//JS2023 - certificado de conclusao aula01

console.log("Confio em você, Igor. Palmeiras!");

//Criei um objeto chamado produto1 que aloca tudo que se pode ter de atributos para o meu produto.
//Observe atentamente a declaração acima e esta. Aqui temos possibilidade de refatoração e aproveitamento de código.
const produto1 = { // aqui criei em forma single - mas convenhamos de usar array né
  id: 1,
  nome: "Casaco Beje",
  marca: "Zara",
  preco: 200,
  nomeArquivoImg: "product-1.jpg",
};



//Início do código - Criei um array de objetos com todos os produtos desejados;
const catalogo = [{ // lembrando que posso construir meu catalogo em sql, que é o indicado
  id: 1,
  marca: "Zara",
  nome: "Camisa Larga com Bolsos",
  preco: 70,
  imagem: "product-1.jpg",
  feminino: false,
}, {
  id: 2,
  marca: "Zara",
  nome: "Casaco Reto com Lã",
  preco: 85,
  imagem: "product-2.jpg",
  feminino: true,
}, {
  id: 3,
  marca: 'Zara',
  nome: 'Jaqueta com Efeito Camurça',
  preco: 60,
  imagem: 'product-3.jpg',
  feminino: false,
}, {
  id: 4,
  marca: 'Zara',
  nome: 'Sobretudo em Mescla de Lã',
  preco: 160,
  imagem: 'product-4.jpg',
  feminino: false,
}, {
  id: 5,
  marca: 'Zara',
  nome: 'Camisa Larga Acolchoada de Veludo Cotelê',
  preco: 110,
  imagem: 'product-5.jpg',
  feminino: false,
}, {
  id: 6,
  marca: 'Zara',
  nome: 'Casaco de Lã com Botões',
  preco: 170,
  imagem: 'product-6.jpg',
  feminino: true,
}, {
  id: 7,
  marca: 'Zara',
  nome: 'Casaco com Botões',
  preco: 75,
  imagem: 'product-7.jpg',
  feminino: true,
}, {
  id: 8,
  marca: 'Zara',
  nome: 'Colete Comprido com Cinto',
  preco: 88,
  imagem: 'product-8.jpg',
  feminino: true,
}]



//Criei uma variável - const cardProduto - e armazenei todo o código em html dentro de crases "`"
//Observe que ao colocar a ${}(variavel) eu posso utilizar este codigo inumeras vezes. É como se fosse POO. Lembre-se disso;
//criando um laço for para fazer com que esse codigo abaixo percorra por todo o array

for(const Produtocatalogo of catalogo ){
  const cardProduto = `<div class ="border-solid border-2 border-sky-500 w-48 m-2 " id="card-produto-${Produtocatalogo.id}">
<img src="assets/assets/img/${Produtocatalogo.imagem}" alt="Produto 1" style="width: 150px;" height="200px">
<p class="marca">${Produtocatalogo.marca} </p>
<p class="nome">${Produtocatalogo.nome}</p>
<p>R$ ${Produtocatalogo.preco}</p>
<button>ADICIONAR AO CARRINHO</button>
</div>`;

//Recuperando um elemento do html a partir de seu id - ação
//Observe que o innerHTML inicialmente é vazio. O operador de atribuição impõe que o JS deve alocar o texto que foi craseado, subsequente das variaveis que eu determinei;
document.getElementById("container-produto").innerHTML += cardProduto;
}

//Observe como é extremamente simples criar variáveis e armazenar no html. Veja como o codigo está limpo. se tivesse feito td em html estaria um codigo gigante.
