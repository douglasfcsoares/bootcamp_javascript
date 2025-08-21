const address1 = {
  street: "Av. Brasil",
  number: 20
};

// Isso não é uma cópia. É uma referência.
const address2 = address1;
console.log("🚀 ~ address1:", address1);
address2.number = 30;
console.log("🚀 ~ address1 depois da atribuição a address2");
console.log("🚀 ~ address1:", address1);
console.log("🚀 ~ address2:", address2);

// Aqui estamos criando um novo objeto utilizando as propriedades e valores de address1.
const address3 = { ...address1 };
address3.number = 40;
console.log("🚀 ~ address1 e 3 apos a atribuição em address3:");
console.log("🚀 ~ address1:", address1);
console.log("🚀 ~ address3:", address3);
