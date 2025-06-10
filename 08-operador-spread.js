"use strict";

import { separador } from "./modulos-esm/exemplos.js";
import { classificar } from "./modulos-esm/funcoes.js";

/*sobe o operador spread ... 
usamos o spread para 
"espalhar" dados de arrays 
e objetos,
o que pode ser útil na
chamada de funções e também na mesclagem destas estruturas.*/

// spread em arrays
const bandas = ["yes", "rush", "criolo"];
const maisBandas = ["dream theater", "savage", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

console.log(classificar(...maisBandas));

separador();

// spread em objetos
const cliente = {
  nome: "ozzy",
  cidade: "belo horizonte",
  idade: 23,
};

const compra = {
  ...cliente, //copiando propriedades de cliente
  codigoPedido: "123xyz",
  produtos: ["capinha", "fone de ouvido"],
  total: 450.99,
  nome: "Luana piovani", //sobreescrevendo uma propriedade que veio com spread
};

console.log(compra);
