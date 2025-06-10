'use strict';

import { separador } from "./modulos-esm/exemplos.js";
import { classificar } from "./modulos-esm/funcoes.js";

/*sobe o operador spread ... 
usamos o spread para "espalhar" dados de arrays e objetos,
o que pode ser útil na chamada de funções e também na mesclagem destas estruturas.*/

// spread em arrays
const bandas = ["yes", "rush", "criolo"];
const maisBandas = ["dream theater", "savage", ...bandas];

console.log(bandas);
console.log(maisBandas);

separador();

console.log( classificar(...maisBandas));