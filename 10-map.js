"use strict";
//10-map.js

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
