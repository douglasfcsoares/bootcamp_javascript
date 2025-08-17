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

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currentValue, index) => {
  console.log("🚀 ~ accumulator:", accumulator);
  console.log("🚀 ~ currentValue:", currentValue);
  console.log("🚀 ~ index:", index);

  console.log("Soma = ", accumulator + currentValue);
  console.log("########################################");

  return accumulator + currentValue;
}, 0);

console.log("O resultado da soma final é ", sum);
