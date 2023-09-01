//Criei uma variável - const cardProduto - e armazenei todo o código em html dentro de crases "`"
//Observe que ao colocar a ${}(variavel) eu posso utilizar este codigo inumeras vezes. É como se fosse POO. Lembre-se disso;
//criando um laço for para fazer com que esse codigo abaixo percorra por todo o array

import { adicionarCarrinho } from "./cart";
import { catalogo } from "./utilidades";

export function renderizacao() {
for(const Produtocatalogo of catalogo ){
    const cardProduto = `<div class ="border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-390  rounded-lg group" id="card-produto-${Produtocatalogo.id}">
  <img src="assets/assets/img/${Produtocatalogo.imagem}" alt="Produto 1" class="group-hover:scale-110 duration-300 my-3 rounded-lg ">
  <p class="text-sm">${Produtocatalogo.marca} </p>
  <p class="text-sm">${Produtocatalogo.nome}</p>
  <p class="text-sm">R$ ${Produtocatalogo.preco}</p>
  <button id='adicionar-${Produtocatalogo.id}' class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
  </div>`;
  
  //Recuperando um elemento do html a partir de seu id - ação
  //Observe que o innerHTML inicialmente é vazio. O operador de atribuição impõe que o JS deve alocar o texto que foi craseado, subsequente das variaveis que eu determinei;
  document.getElementById("container-produto").innerHTML += cardProduto;

  }
  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarCarrinho(produtoCatalogo.id));
  }
}