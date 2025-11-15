/**
 * O método reduce é utilizado para reduzir um array a um único valor.
 *
 * Parâmetros:
 * - Array original (values)
 * - Acumulador (accumulator)
 * - Valor de iteração (currentValue)
 * - Valor Inicial (0)
 * - Index (index da iteração atual - opcional)
 */

const values = [8, 13, 27, 30, 22, 40];

const sum = values.reduce((accumulator, currentValue) => {
  console.log("🚀 ~ accumulator:", accumulator);
  console.log("🚀 ~ currentValue:", currentValue);
  // console.log("🚀 ~ index:", index);

  console.log("Soma = ", accumulator + currentValue);
  console.log("########################################");

  return accumulator + currentValue;
}, 0);

console.log("O resultado da soma final é ", sum);
