// 1. Assinale uma variável pra cada valor na lista "numeros" utilizando Destructuring, e logue-as no console.

const numeros = [1, 2, 3, 4, 5];
const [um, dois, tres, quantro, cinco] = numeros;
console.log("🚀 ~ um:", um);
console.log("🚀 ~ dois:", dois);
console.log("🚀 ~ tres:", tres);
console.log("🚀 ~ quantro:", quantro);
console.log("🚀 ~ cinco:", cinco);

// 2. Inverta os valores das variáveis "a" e "b". Transforme o valor da variável "a" no valor da variável "b" e vice-versa, e logue-as no console.

let a = 5;
console.log("🚀 ~ a:", a);
let b = 10;
console.log("🚀 ~ b:", b);
[a, b] = [b, a];
console.log("🚀 ~ a:", a);
console.log("🚀 ~ b:", b);

// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo" adicionando dois novos valores a ela utilizando o Spread Operator, e logue-a no console.

const melhoresSeriesDoMundo = ["GOT", "Breaking Bad", "Vikings"];
const melhoresSeriesDoMundo2 = [
  ...melhoresSeriesDoMundo,
  "The big bang theory",
  "how i met your mother"
];
console.log("🚀 ~ melhoresSeriesDoMundo2:", melhoresSeriesDoMundo2);

// 4. Assinale os dois primeiros valores da lista "sobremesas" a duas variáveis, e distribua o restante em apenas uma, utilizando o Spread Operator, e logue-as no console.

const sobremesas = [
  "Sorvete",
  "Petit Gateau",
  "Açai",
  "Pudim",
  "Mousse de Maracujá"
];

const [sorvete, petit, ...resto] = sobremesas;
console.log("🚀 ~ sorvete:", sorvete);
console.log("🚀 ~ petit:", petit);
console.log("🚀 ~ resto:", resto);
