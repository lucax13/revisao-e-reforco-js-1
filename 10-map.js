"use strict";
//10-map.js

import { separador } from "./modulos-esm/exemplos.js";
import cursos from "./modulos-esm/cursos.js";

/*map (mapear, mapeamento - transformar/gerar em outra coisa) passa por elementos
de um array e realiza operações em cada um deles através de uma função callback, gerando um novo array de elementos transformados.*/

// Exemplo 1
const numeros = [10, 20, 5, 40, 60, 70, 80];
console.log(numeros);

const numerosDobrados = numeros.map((numero) => numero * 2);
console.log(numerosDobrados);

// exercicio
const textos = ["LUANA", "PIETRA", "BRUNO", "LEO", "LUCA"];
console.log(textos);

const textosMinusculo = textos.map((texto) => texto.toLowerCase());
console.log(textosMinusculo);

separador();

console.log("== Lista Completa de Cursos ==");
console.log(cursos);
console.log("==============================");

separador();

//exemplo 2: gerar um novo array contendo somente os titulos dos cursos
const titulos = cursos.map((curso) => curso.titulo);
console.log(titulos);

separador();

const precos = cursos.map((curso) => curso.preco - curso.preco * 0.1);
console.log(precos);

separador();

// exemplos 3: gerar array Completo mas com os precos atualizaos com o desconto

const cursosCOMDesconto = cursos.map((curso) => {
  return {
    ...curso,
    preco: curso.preco - curso.preco * 0.1,
  };
});

console.log(cursosCOMDesconto);

separador();

const cursoCategoria = cursos.map((curso) => {
  return {
    titulo: curso.titulo,
    categoria: curso.categoria,
  };
});

console.log(cursoCategoria);
