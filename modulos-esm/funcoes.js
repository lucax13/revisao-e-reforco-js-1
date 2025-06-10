'use strict';

export const converterMaiuscula = texto => texto.toUpperCase();

export const converterMinuscula = texto => texto.toLowerCase();

export const formatarMoeda = (valor, moeda = 'BRL', localidade = 'pt-BR' ) => {
    return valor.toLocaleString(
        localidade,
        {
            style: "currency",
            currency: moeda
        }
    )
};
/*usamos o rest operador para obter uma lista de parametros, não importando a quandidade */
export function classificar(...texto){
    return texto.sort();
}

// export { converterMaiuscula, converterMinuscula, formatarMoeda }