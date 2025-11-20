// // O método map() chama a função callback recebida por parâmetro
// //  para cada elemento do array original, em ordem, e constrói um
// // novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

// const products = ["teclado", "mouse", "monitor", "gabinete"];

// // Percorrendo os itens do array.
// products.map(product => {
//   console.log(product);
// });

// // sintaxe reduzida.
// products.map(product => console.log(product));

// // Utilizando o novo objeto retornado.
// const formatted = products.map(product => {
//   // return product.toUpperCase();

//   return {
//     id: Math.random(),
//     description: product.toUpperCase()
//   };
// });

// console.log(formatted); // ["TECLADO", "MOUSE", "MONITOR", "

// Exemplos com números
const numeros = [1, 2, 3, 4, 5];

// o método map, sempre retorna uma lista
const numerosMultiplicadosPor2 = numeros.map(item => item * 2);
console.log("🚀 ~ numerosMultiplicadosPor2:", numerosMultiplicadosPor2);

// Exemplo com objetos
const usuario = [
  {
    nome: "Douglas",
    idade: 33
  },
  {
    nome: "Camila",
    idade: 35
  }
];

const usuariosComIdadeMultiplicadaPor2 = usuario.map((item, index) => {
  return { ...item, idade: item.idade * 2 };
});

console.log(usuariosComIdadeMultiplicadaPor2);
