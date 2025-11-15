// O método find() retorna o valor do primeiro elemento do array que satisfaça a condição.
// Caso contrário, retorna undefined.

const values = [5, 34, 65, 2, 42, 552];

// Retorna o primeiro elemento que o valor é maior que 10.
const found = values.find(value => value > 10);
console.log(found);

// Exemplo com objetos.
const fruits = [
  { name: "Banana", quantity: 10 },
  { name: "Apple", quantity: 20 },
  { name: "Orange", quantity: 40 }
];

const result = fruits.find(fruit => fruit.name === "Banana");
console.log(result);
