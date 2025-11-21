// A classe Pessoa demonstra como o contexto do `this` se comporta de maneira diferente em funções normais e arrow functions,
// especialmente quando usadas como callbacks (por exemplo, dentro de setTimeout).

// No método printNomeArrow, usamos uma arrow function dentro do setTimeout.
// Em arrow functions, o `this` não é redefinido: ele mantém o valor do `this` do contexto onde foi criada, ou seja,
// dentro de printNomeArrow, o `this` continua sendo a instância da classe Pessoa. Por isso, `this.nome` funciona corretamente.

// Já em printNomeFunction, é usada uma função anônima "normal" dentro do setTimeout.
// Nesse caso, o `this` dentro dessa função NÃO é o mesmo do contexto da instância da classe Pessoa,
// mas sim o contexto global (no navegador seria o objeto window, no Node pode ser undefined).
// Por isso, ao acessar `this.nome`, o valor geralmente será undefined, pois `nome` não existe no contexto global.

// Resumindo:
// - Arrow function: mantém o this léxico (do contexto externo).
// - Function normal: this depende de como a função é chamada (perde o contexto da classe).

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  // o this em Arrow function sempre vai referenciar o contexto do objeto ao qual ela pertence.
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
