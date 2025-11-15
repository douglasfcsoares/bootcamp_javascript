// O método some() testa se ao menos um dos elementos no array passa na condição.
// e retorna um valor boolean.

// Exemplo de array de idades.
const ages = [19, 25, 34, 64, 23, 19];

const result = ages.some(age => age < 18);
console.log(result);
