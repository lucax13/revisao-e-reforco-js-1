'use strict';
import { classificar } from "./modulos-esm/funcoes.js";


/*sobre o operador rest ...
usmos o rest para mesclar uma relação de paramentros/argumentos
para uma função.*/ 

function somar(...valores){
    //variavel acumuladora
    let total = 0;

    // interaçãp para somar e guardar o total
    for(const valor of valores){
        total += valor;
    }

    return total;
}

let resultado1 = somar(10,20);
let resultado2 = somar(10, 20, 50);
console.log(resultado1);
console.log(resultado2);   

console.log("=-=-=-=-=-=-=-=-=-=-=-=-");

console.log(classificar ("limão", "mamão", "maracuja", "laranja"));
console.log(
    classificar(
        "yes", "rush", "pink floy", "iron maiden", "slayer"
    )
);