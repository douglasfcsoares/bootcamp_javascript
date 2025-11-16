// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passam a gerar exceções no Javascript

"use strict";

function showMessage() {
  // personName = "Douglas Soares"; // não é possível atribuir uma string a uma variável que não foi declarada usando o strict mode.
  let personName = "Douglas Soares";
  console.log("Olá", personName);
}

showMessage();

class Student {
  get point() {
    return 7;
  }
}

let student = new Student();
console.log(student.point); // 7

// tenta mudar uma propriedade de somente leitura.
// student.point = 10;

// tenta deletar uma propriedade de um objeto que não posso deletar.
delete window.document;

// quando passamos parâmetros duplicados.
// function sum(a, a, c) {
//   return a + a + c;
// }

// const result = sum(1, 3, 2); // quando tem parâmetros duplicados o segundo sobrepõem o primeiro.
// console.log("🚀 ~ result:", result);
