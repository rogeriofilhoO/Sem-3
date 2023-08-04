export function criaMatriz(linhas, colunas) {
  let matriz = [];
  for(let index = 0; index < linhas; index++) {
      matriz[index] = [];
      for(let jIndex = 0; jIndex < colunas; jIndex ++) {
          matriz[index][jIndex] = Math.floor(Math.random() * 10);
      }
  }
  return matriz;
}

export function somaElementos(matriz) {
  var soma = 0;
  for (var i = 0; i < matriz.length; i++) {
    for (var j = 0; j < matriz[0].length; j++) {
      soma += matriz[i][j];
    }
  }
  return soma;
}

//Code by Rogério Filho e João Flores