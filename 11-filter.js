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
