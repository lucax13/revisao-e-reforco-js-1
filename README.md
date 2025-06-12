# Atividades de revisão e reforço de JavaScript

## Sobre escopo de variáveis e constantes

- `var`: escopo GLOBAL
- `let`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada
- `const`: escopo BLOCO, podendo ser GLOBAL dependendo de onde declarada. Obs.: **obrigatório** inicializar com algum valor.

---

## Módulos no JavaScript

Existem duas formas de uso:

- Módulos CJS: mecanismo mais antigo, usa `module.exports` e `require` associado à uma constante.
- Módulos ESM: mecanismo atual, usa `export` e `import`.

**Obs.:** recomendável criar na raíz o `package.json` contendo:

```json
{
  "type": "module"
}
```

---

## sobre os separadores rest e spread (...)

## Operador Rest (...)

O operador Rest no JavaScript é como uma "cesta de coleta": ele agrupa múltiplos elementos passados para uma função (ou em uma desestruturação) e os transforma em um único array. É super útil quando você não sabe quantos argumentos uma função vai receber, permitindo que você lide com eles de forma flexível como uma coleção. Ele "coleta o resto" dos valores em um array.

## Operador Spread (...)

Já o operador Spread age de forma oposta, como um "espalhador": ele expande os elementos de um iterável (como um array ou objeto) em locais onde múltiplos argumentos ou elementos são esperados. É ideal para combinar arrays, copiar objetos, ou passar os elementos de um array como argumentos individuais para uma função, tornando o código mais conciso e fácil de ler.

---

## sobre desestruturação

Desestruturação em JavaScript serve para extrair valores de arrays ou propriedades de objetos de forma mais prática e direta. Com ela, é possível atribuir variáveis rapidamente, tornando o código mais limpo e legível. Por exemplo, const { nome, idade } = pessoa; extrai as propriedades nome e idade do objeto pessoa. Também funciona com arrays: const [a, b] = [1, 2];.
