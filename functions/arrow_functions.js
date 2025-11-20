function somar(a, b) {
  return a + b;
}

// const sum = (a, b) => {
//   return a + b;
// };

// mesma coisa que acima.
const somaArrow = (a, b) => a + b;

console.log(somaArrow(2, 4));

// outro exemplo

function veirificarPositivo(numero) {
  return numero >= 0;
}

// mesma coisa que acima.
const veirificarPositivoArrow = numero => numero >= 0;

console.log(veirificarPositivoArrow(2));
console.log(veirificarPositivoArrow(-2));

// outro exemplo
function retornaObjeto() {
  return {
    name: "John",
    lastName: "Doe"
  };
}

// mesma coisa que acima.
const retornaObjetoArrow = () => ({
  name: "John",
  lastName: "Doe"
});

console.log(retornaObjetoArrow());
