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

function somaColunaElementos(matriz){
    let ar = new Array(matriz.length);
    for(let i = 0; i < matriz.length; i++) {
        ar[i] = 0;
        for(let j = 0; j < matriz[0].length; j++) {
            ar[i] += matriz[j][i];
        }
    }

    return ar;
}


module.exports = {
    gerarValoresMatriz,
    somaColunaElementos
}