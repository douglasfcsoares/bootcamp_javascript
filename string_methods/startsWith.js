const texto = "Ser ou não ser, eis a questão";

// startswith
const comecaComSer = texto.startsWith("Ser");
console.log("🚀 ~ comecaComSer:", comecaComSer);

// startsWith passando a posição de onde quero começar a checar.
// no segundo parâmetro coloco o indice de onde quero começar a checar.
const comecaComNãoSer = texto.startsWith("não ser", 7);
console.log("🚀 ~ comecaComNãoSer:", comecaComNãoSer);
