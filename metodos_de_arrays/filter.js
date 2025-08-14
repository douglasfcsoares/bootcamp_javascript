// O método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["javascript", "html", "css", "web"];

// filtrando palavras que tenham mais do quê três letras.
const results = words.filter(word => word.length > 3);
console.log(results);

const products = [
  { description: "Teclado", price: 150, promotion: true },
  { description: "Mouse", price: 50, promotion: false },
  { description: "Monitor", price: 900, promotion: true }
];

const promotion = products.filter(product => product.promotion === true);
console.log(promotion);
