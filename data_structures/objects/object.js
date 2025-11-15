// Exemplo de estrutura de dados: objetos

// Criando um objeto representando uma pessoa
const person = {
  name: "Douglas",
  age: 33,
  profession: "Desenvolvedor",
  hobbies: ["Assistir Animes", "ler", "Jogar videogame"],
  saudacao: function () {
    console.log(`Olá, meu nome é ${this.name} e eu sou ${this.profession}.`);
  }
};

// Acessando propriedades do objeto
console.log("Nome:", person.name);
console.log("Idade:", person.age);

// Modificando uma propriedade
person.age = 34;
console.log("Nova Idade:", person.age);

// Adicionando nova propriedade ao objeto
person.city = "Florianópolis";
console.log("Cidade:", person.city);

// Chamando um método do objeto
person.saudacao();

// Percorrendo as propriedades do objeto
for (let chave in person) {
  if (typeof person[chave] !== "function") {
    console.log(`Propriedade: ${chave} | Valor: ${person[chave]}`);
  }
}

// Destructuring em objetos
// o destructuring faz com que cada valor seja atribuido as constantes definidas no destructuring.
// de forma extensa o destructuring abrevia o seguinte código
// name = person.name
// age = person.age...
const { name, age, profession, hobbies, saudacao } = person;
console.log("🚀 ~ name:", name);
console.log("🚀 ~ age:", age);
console.log("🚀 ~ profession:", profession);
console.log("🚀 ~ hobbies:", hobbies);

// a constante saudacao que recebe o método do objeto person, aparece as propriedades
// como undefined pois perde o contexto do objeto
person.saudacao();
