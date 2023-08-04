export function multiplicaUltimo(matriz) {
  let multiplicacao = 1;
for (let index = 0; index < matriz.length; index++) {  
    for (let jIndex = 1; jIndex < matriz[index].length; jIndex++) {
      multiplicacao *= matriz[index][jIndex];
    }  
  }  
  console.table(matriz);
  console.log(`
  Multiplicação: ${multiplicacao}
  `);
}