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
console.log("ex3");

const cursoDesign = cursos.filter((curso) => {
  return curso.categoria === "Design";
});

console.log(cursoDesign);

separador();

//Exemplo 4
console.log("ex4");

const cursosExetoDesign = cursos.filter(
  (curso) => curso.categoria !== "Design"
);

console.log(cursosExetoDesign);

separador();

//exercicios
console.log("ex1");
const cursoFullstack = cursos.filter((curso) => {
  return (
    curso.categoria === "Front-End" ||
    (curso.categoria === "Mobile" && curso.preco > 600)
  );
});

console.log(cursoFullstack);

separador();

console.log("ex2");
const cursosDesconto = cursos
  .filter((curso) => {
    return curso.categoria === "Back-End";
  })
  .map((curso) => {
    return {
      ...curso,
      preco: curso.preco - curso.preco * 0.1,
    };
  });

console.log(cursosDesconto);

// const desafio = cursos
// .filter(({categoria}) => categoria === "Back-end").map((curso) => ({
//   ...curso
//   preco: preco.

// }))

//map((curso) => curso.preco - curso.preco * 0.1);
//cursos.map(curso)

console.log(cursosPorCategoriaComDesconto);

// const cursosComDesconto = cursos.map((curso) => {
//   return {
//     ...curso, //spread das propriedades do curso(copianod -as para cá)
//     preco: curso.preco - curso.preco * 0.1, // mas o preco é atualzado
//   };
// });
