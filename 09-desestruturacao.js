"use strict";
// 09-desestruturacao.js

import { separador } from "./modulos-esm/exemplos.js";

// Desestruturando arrays
const clientes = ["Jon Oliva", "Geddy Lee", "David Gilmour"];
const [cliente1, cliente2, cliente3] = clientes;

console.log(cliente1);
console.log(cliente2);
console.log(cliente3);

separador();

const capitais = [
  "João Pessoa",
  "Manaus",
  "Curitiba",
  "Salvador",
  "Belo Horizonte",
];

const [paraiba, amazonas, parana, bahia, minasGerais] = capitais;

console.log(paraiba);
console.log(amazonas);
console.log(bahia);

separador();

const linguagens = [
  ["HTML", "CSS", "JS"],
  ["PHP", "Node.js", "SQL", "Python", "ASP.Net"],
];

console.log(linguagens);

//console.log(linguagens[0][2]);
//console.log(linguagens[1][3]);

const [frontEnd, backEnd] = linguagens;

console.log(frontEnd[2]);
console.log(backEnd[3]);

separador();

//desestruturação alinhada
const [[html, css, js], [php, node, sql, python, asp]] = linguagens;
console.log(js);
console.log(python);
