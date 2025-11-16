// Uma classe é um "molde" ou "template" para criar objetos com propriedades e métodos específicos.
// No JavaScript, as classes são introduzidas como uma forma mais clara e fácil de trabalhar com objetos e herança.

// Exemplo de classe:
class Person {
  // O método constructor é chamado quando criamos um novo objeto da classe
  constructor(firstName, lastName, age) {
    this.firstName = firstName; // propriedade firstName
    this.lastName = lastName; // propriedade lastName
    this.age = age; // propriedade age
  }

  // Método para apresentar a pessoa
  getFullname() {
    console.log(
      `Olá! Meu nome é ${this.firstName} ${this.lastName} e tenho ${this.age} anos.`
    );
  }

  // Método estático para falar
  static speak() {
    console.log("Hello Word!");
  }
}

// Criando uma instância (objeto) da classe Person
const person1 = new Person("Dougas", "Soares", 33);

// Chamando o método da instância
person1.getFullname(); // Saída: Olá! Meu nome é Douglas Soares e tenho 33 anos.

// Explicação:
// A classe Person define como objetos do tipo "pessoa" devem se comportar, quais informações precisam conter
// (nome sobrenome e idade), e o que podem fazer (método getFullName). Para criar um novo objeto do tipo Person, usamos a palavra-chave 'new'.

Person.speak();
