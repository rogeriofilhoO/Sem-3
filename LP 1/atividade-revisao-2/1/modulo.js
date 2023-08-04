function gerarValoresMatriz(linhas, colunas) {
    let matriz = [];
    for(let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for(let j = 0; j < colunas; j ++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }

    return matriz;
}

function somaElementos(matriz){
    var soma = 0;
    for(let i = 0; i < matriz.length; i++) {
        for(let j = 0; j < matriz[0].length; j++) {
            soma += matriz[i][j];
        }
    }

    return soma;
}

module.exports = {
    gerarValoresMatriz,
    somaElementos
}