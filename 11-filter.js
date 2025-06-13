"use strict";
//11-filter.js

import cursos from "./modulos-esm/cursos.js";
import { separador } from "./modulos-esm/exemplos.js";

/*filter (filtrar) passa por elementos de um array e executa uma função callback
visando reornar valores de acordo com uma ou mais condições, gerando um novo array.*/

const vendas = [1500, 200, 905, 3000, 780, 9000];
const META = 1000;

const vendasQueBateramMeta = vendas.filter((venda) => venda >= META);

console.log(vendasQueBateramMeta);

separador();

//exmplo 2: filter serviçõs pendentes
const servcos = [
  { codigo: 1, tipo: "limpeza", status: "concluido" },
  { codigo: 2, tipo: "manutenção", status: "pendente" },
  { codigo: 3, tipo: "instalação", status: "concluido" },
  { codigo: 4, tipo: "reparo", status: "pendente" },
  { codigo: 5, tipo: "consultoria", status: "concluido" },
];

const servicoPendente = servcos.filter((servico) => {
  return servico.status == "pendente";
});
console.log(servicoPendente);

separador();

// Exemplo 3
const cursoDesing = cursos.filter((curso) => {
  return curso.categoria === "Desing";
});

console.log(cursoDesing);

separador();

//Exemplo 4
const cursosExetoDesing = cursos.filter(
  (curso) => curso.categoria !== "Desing"
);

console.log(cursosExetoDesing);

separador();

//exercicio
const cursoFullstack = cursos.filter((cursos) => {
  return cursos.preco >= 600;
});

console.log(cursoFullstack);

separador();
