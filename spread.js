// Spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3];
console.log("🚀 ~ numbers:", numbers);

// spread
console.log(...numbers);

const data = [
  { id: 1, name: "João", email: "joao@email.com", avatar: "j.png" },
  { id: 2, name: "Douglas", email: "douglas@email.com", avatar: "d.png" }
];

console.log("🚀 ~ data:", data);

// Utilizando o spread no array com objetos.
console.log(...data);
