class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  printNomeArrow() {
    setTimeout(() => {
      console.log(`Arrow: ${this.nome}`);
    }, 100);
  }

  printNomeFunction() {
    setTimeout(function () {
      console.log(`Function: ${this.nome}`);
    }, 100);
  }
}

const bob = new Pessoa("Bob");

bob.printNomeArrow();
bob.printNomeFunction();
