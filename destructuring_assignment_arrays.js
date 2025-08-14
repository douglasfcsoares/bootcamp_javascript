// Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const data = ["Douglas Soares", "douglas@gmail.com"];

// Desestruturando array

const [nome, email] = data;
console.log("🚀 ~ nome:", nome);
console.log("🚀 ~ email:", email);

const fruits = ["Banana", "Apple", "Orange"];

// Desestruturar somente o primeiro
const [banana] = fruits;
console.log("🚀 ~ banana:", banana);

// ignorando o primeiro na desestruturação.
const [_, apple] = fruits;
console.log("🚀 ~ apple:", apple);

// ignorando o primeiro e o segundo elemento do array
const [, , orange] = fruits;
console.log("🚀 ~ orange:", orange);
