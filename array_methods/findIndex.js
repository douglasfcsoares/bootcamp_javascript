// O método findIndex() retorna o índice no array do primeiro elemento
// que satisfizer a condição. Caso contrário, retorna -1, indicando que nenhum elemento
// satisfaz a condição.

const values = [3, 4, 5, 8, 34, 67];

// Obtendo o primeiro índice do primeiro elemento que o valor é maior do que 4
const index = values.findIndex(value => value > 4);
console.log(index);
console.log(values[index]);

// Exemplo de quanto não é encontrado nenhum elemento que satisfaça a condição.
console.log(values.findIndex(value => value > 70));
