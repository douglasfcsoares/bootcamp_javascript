// O método every() testa se todos os elementos do array passam na condição e retorna um valor boolean.

// Exemplo de array de idades.
const ages = [15, 25, 34, 64, 23, 19];

// verifica se todas as idades são maiores que 18.
const isAdult = ages.every(age => age >= 18);
console.log(isAdult); // false
