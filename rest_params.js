// Rest Params (...) permite representar um número indefinido de argumentos como um array.

function values(...args) {
  // Mostra a quantidade de parâmetros.
  console.log(args.length);

  // Exibe o conteúdo do array.
  console.log(...args);

  // Exibe o conteúdo do rest que é um array.
  console.log(args);
}

values(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
