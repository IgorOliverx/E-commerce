//Fazendo varios cards a partir do inicial feito em html;
//JS2023 - certificado de conclusao aula01
//CSS2908 - certificado de conclusao aula02
//MAGAZINEHASH - certificado de conclusao aula03


console.log("Confio em você, Igor. Palmeiras!");

// //Criei um objeto chamado produto1 que aloca tudo que se pode ter de atributos para o meu produto.
// //Observe atentamente a declaração acima e esta. Aqui temos possibilidade de refatoração e aproveitamento de código.
// const produto1 = { // aqui criei em forma single - mas convenhamos de usar array né
//   id: 1,
//   nome: "Casaco Beje",
//   marca: "Zara",
//   preco: 200,
//   nomeArquivoImg: "product-1.jpg",
// };

import { renderizacao } from "./src/cardProduto";
import {inicializarCarrinho} from "./src/cart";


renderizacao();
inicializarCarrinho();