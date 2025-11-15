const book = {
  title: "Objetos Imutáveis",
  category: "javascript",
  author: {
    name: "Douglas",
    email: "douglas@emai.com"
  }
};

// O Javascript em si não impõe restrições à modificação dos objetos.
book.category = "HTML";

console.log(book);
