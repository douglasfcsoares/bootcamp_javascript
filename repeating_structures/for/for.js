// for (let i = 0; i <= 20; i++) {
//   console.log(i);
// }

const cars = ["HB20", "Argo", "BYD Dolphin", "Peugeot 208"];

for (let i = 0; i < cars.length; i++) {
  console.log(`Carro legal: ${cars[i]}`);
}

// O laço "for...of" é uma estrutura de repetição do JavaScript que permite percorrer (iterar) facilmente todos os elementos de uma coleção iterável, como arrays ou strings.
// Em cada iteração, a variável definida recebe o valor do elemento atual do array, facilitando o acesso sem precisar usar índices.
// Exemplo:
// for (let carro of cars) {
//   console.log(carro);
// }
// Esse laço vai imprimir cada elemento do array "cars" um por um.

for (let car of cars) {
  console.log(car);
}

// O método forEach é uma função disponível em arrays no JavaScript que permite executar uma determinada função para cada elemento do array.
// A sintaxe é: array.forEach(function(elemento) { /* código a ser executado */ });
// Exemplo prático usando o array cars:
cars.forEach(function (car, index) {
  console.log("🚀 ~ index:", index);
  console.log(`Usando forEach: ${car}`);
});
// O forEach é útil quando você quer realizar uma ação para cada item do array sem precisar gerenciar índices manualmente.
