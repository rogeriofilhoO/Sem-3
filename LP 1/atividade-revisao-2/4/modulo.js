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

function mediaMatriz(matriz) {
    let soma = 0;
    let qnt = 0;

    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz[0].length; j++) {
            soma += matriz[i][j];
            qnt++;
        }    
    }
    return soma / qnt;
}

module.exports = {
    gerarValoresMatriz,
    mediaMatriz
}