// 1. converta  as funções abaixo para Arrow Functions

function somar(a, b) {
  return a + b;
}

// conversão para arrow function
const somarArrow = (a, b) => a + b;

function verificarNegativo(num) {
  return num < 0;
}

// conversão para arrow function
const verificarNegativoArrow = num => num < 0;

function criarUsuario(nome, idade) {
  return {
    nome,
    idade
  };
}

// conversão para arrow function
const criarUsuarioArrow = (nome, idade) => ({ nome, idade });

console.log(criarUsuarioArrow("Douglas", "Soares"));

setTimeout(function () {
  console.log("Hello World!");
}, 1000);

// conversão para arrow function
setTimeout(() => {
  console.log("Olá Mundo!");
}, 1000);
