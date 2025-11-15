// A estrutura condicional `if` em JavaScript permite executar um bloco de código apenas se uma condição for verdadeira.

// Exemplo básico:
let idade = 18;
if (idade >= 18) {
  console.log("Você é maior de idade.");
}

// Explicação:
// - A palavra-chave `if` é seguida de uma expressão entre parênteses ( ), chamada de condição.
// - Se a condição for avaliada como verdadeira (`true`), o bloco de código entre chaves { } será executado.
// - Caso contrário, o código dentro das chaves será ignorado.

// Também é possível usar `else` para definir um bloco que será executado se a condição não for verdadeira:
if (idade >= 18) {
  console.log("Você é maior de idade.");
} else {
  console.log("Você é menor de idade.");
}

// Você pode adicionar múltiplas condições usando `else if`:
if (idade < 12) {
  console.log("Criança");
} else if (idade < 18) {
  console.log("Adolescente");
} else {
  console.log("Adulto");
}

const sum1 = 2 + 2;
const sum2 = 3 + 10;

// Usando o operador lógico `and` (&&):
if (sum1 === 4 && sum2 === 13) {
  console.log("As duas condições são verdadeiras (sum1 é 4 E sum2 é 13).");
}

// Usando o operador lógico `or` (||):
if (sum1 === 4 || sum2 === 13) {
  console.log("Uma das condições é verdadeira (sum1 é 4 OU sum2 é 13).");
}

// O operador ternário é uma forma concisa de escrever uma estrutura condicional `if-else`.
// Sua sintaxe é: condição ? valorSeVerdadeiro : valorSeFalso;

let mensagem = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(mensagem);

// Exemplo com outra variável:
let podeDirigir = idade >= 18 ? true : false;
console.log("Pode dirigir?", podeDirigir);
