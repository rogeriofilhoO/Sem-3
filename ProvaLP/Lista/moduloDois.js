export function somaDiagonal(matriz) {
  let soma = 0;
  for (let index = 0; index < matriz.length; index++) {
    for (let jIndex = 0; jIndex < matriz[index].length; jIndex++) {
      if (jIndex === index++) {
        soma += matriz[index][jIndex]
      }
    }
  }
  console.table(matriz);
  console.log(`
  Soma: ${soma}
  `);
}