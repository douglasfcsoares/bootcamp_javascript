// Destructuring assignment (desestruturação) permite extrair dados de arrays ou objetos em variáveis distintas.

const product = {
  description: "Teclado",
  price: 150
};

// Desestruturando objeto
const { description, price } = product;
console.log("🚀 ~ description:", description);
console.log("🚀 ~ price:", price);

function newProduct({ description, price }) {
  console.log("################### Novo Produto #####################");
  console.log("🚀 ~ description:", description);
  console.log("🚀 ~ price:", price);
}

newProduct({ description: "Mouse", price: 50 });
newProduct({ price: 70, description: "webcam" });
