// Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const product = {
  description: "Teclado",
  price: 150
};

const user = {
  firstName: "Douglas",
  lastName: "Soares",
  age: 33
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.age);

const { firstName } = user;
console.log("🚀 ~ firstName:", firstName);

console.log("");

console.log("##################### SPRED OPERATOR #######################");
const { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
console.log(a, b);
console.log("🚀 ~ rest:", rest);

// Em objetos diferente do array, o destructuring se refere a chave do objeto.
// como no exemplo abaixo as primeiras duas constantes receberão o valor undefined
// pois essas chaves não existem no objeto que está sendo atribuido as novas constantes.
// const { f, g, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
// console.log(f, g);

//* Atribuindo valores padrão no destructuring, em caso de não haver a chave no objeto que está sofrendo o destructuring
const { d, e = 2 } = { d: 4 };
console.log("🚀 ~ d:", d);
console.log("🚀 ~ e:", e);

// console.log("##################### SEGUNDO EXEMPLO #######################");

// Desestruturando objeto
const { description, price } = product;
// console.log("🚀 ~ description:", description);
// console.log("🚀 ~ price:", price);

function newProduct({ description, price }) {
  console.log("################### Novo Produto #####################");
  console.log("🚀 ~ description:", description);
  console.log("🚀 ~ price:", price);
}

// newProduct({ description: "Mouse", price: 50 });
// newProduct({ price: 70, description: "webcam" });
