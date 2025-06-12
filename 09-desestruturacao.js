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

separador();

const diversos = [
  "JavaScript - Reforço",
  ["Teclado", "Monitor", "Mouse"],
  2112,
  (texto) => texto.toUpperCase(),
];

const [javaScript, [teclado, monitor, mouse], valor, funcao] = diversos;
console.log(javaScript);
console.log(teclado);
console.log(monitor);
console.log(mouse);
console.log(valor);
console.log(funcao("lucas"));

separador();

const guloseimas = [
  "brigadeiro",
  "brownie",
  "torta de limão",
  "coxinha",
  "pastel",
  "pizza",
  "esfiha",
];

const [brigadeiro, brownie, torta, ...salgados] = guloseimas;
console.log(salgados);
console.log(brigadeiro);

separador();

const musico = {
  nome: "bon jovi",
  instrumento: "Guitarra",
  idade: 55,
  banda: "Pink floyd",
};

//console.log(musico.nome);
//console.log(musico.idade);

// com desestruturação
const { nome, instrumento, idade, banda } = musico;
console.log(nome);
console.log(instrumento);
console.log(idade);
console.log(banda);

separador();

const aluno = {
  nome: "Ozzy",
  cidade: "São paulo",
  estado: "SP",
};

// desetruturação com alias/apelido em propriedade
const { nome: nomeDoAluno, cidade, estado } = aluno;

console.log(nomeDoAluno);
console.log(cidade);
console.log(estado);

separador();

const paciente = {
  nome: "Gabriel Viana",
  idade: 19,
  contatos: ["gabriel@gmail.com", "11-99888-2299"],
  sintomas: "sonolencia permanente, coriza, tosse, bronquite..",
  mensalidade: 568.74,
  endereco: {
    localidade: "Rua francisco Coimbra",
    numero: "403",
    bairro: "Penha",
  },
  atendimento: () => (paciente.idade >= 60 ? "prioritario" : "normal"),
};

const {
  nome: nomeDoPaciente,
  idade: idadeDoPaciente,
  sintomas,
  mensalidade,
  contatos: [email, telefone],
  endereco: { localidade, numero, bairro },
  atendimento,
} = paciente;

console.log(nomeDoPaciente);
console.log(idadeDoPaciente);
console.log(sintomas);
console.log(mensalidade);
console.log(email);
console.log(telefone);
console.log(localidade);
console.log(numero);
console.log(atendimento());

separador();

function processarPedido([produto, preco, marca = "não informado"]) {
  console.log("Produto: " + produto);
  console.log("Preço: " + preco);
  console.log("Marca: " + marca);
}

const pedidoA = ["Tv", 1500, "Sony"];
processarPedido(pedidoA);

const pedidoB = ["iphone 15", 5000];
processarPedido(pedidoB);

separador();

const exibirDados = ({ titulo, ano = "desconhecido" }) =>
  console.log(`filme: ${titulo} - Ano: ${ano} \n`);

const filme1 = {
  titulo: "o hobbit",
  ano: 2012,
};

const filme2 = {
  titulo: "o senhor dos aneis",
};

exibirDados(filme1);
exibirDados(filme2);
