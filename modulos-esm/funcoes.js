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

// export { converterMaiuscula, converterMinuscula, formatarMoeda }