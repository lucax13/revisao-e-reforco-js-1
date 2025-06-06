// 03-funcoes.js
'use strict';

exemplo1(); // chamada da função

/* Sintaxe tradicional, função nomeada 
A ordem de declaração da função neste caso NÃO IMPORTA */
function exemplo1(){
    console.log("Função nomeada");
}

exemplo1(); // chamada da função


function separador(){
    console.log("\n********************************\n");
}

separador();

// Chamada aqui dá erro, pois não pode ser feita antes da declaração
// exemplo2(); 

/* Sintaxe tradicional, função anônima
Nesta sintaxe, a ordem de declaração IMPORTA. */
const exemplo2 = function(){
    console.log("Função anônima");
};

exemplo2(); // chamada (sempre após declarar a função anônima)


separador();

// MINI-EXERCÍCIOS

/* 1) Crie uma função (qualquer sintaxe) que receba dois valores
numéricos como parâmetros, calcule a diferença entre estes valores
e retorne o resultado calculado. */
function calcularDiferenca( valor1, valor2 ){
    let diferenca = valor1 - valor2;
    return diferenca;
    // return valor1 - valor2;
}

/* 2) Chame esta função pelo menos duas vezes passando valores diferentes
e guardando os resultados em variáveis de escopo global. */
let resultado1 = calcularDiferenca(10, 125);
let resultado2 = calcularDiferenca(1250.7, -12);


/* 3) Apresente os resultados no console. */
console.log(resultado1);
console.log(resultado2);
console.log( calcularDiferenca(100, 50) );



