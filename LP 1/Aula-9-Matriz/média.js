//Construir uma matriz que nas 2 primeiras colunas tem notas
// e na tercerira coluna é média

var p = require('prompt-sync')();
var matriz = [];
var media = 0;

for(var i = 0; i < 3; i++) {
    matriz[i] = [];
    for(var j = 0; j < 3; j++) {
        matriz[i][j] = Math.floor(Math.random() * 10);
    }
}

//Média
for(var i = 0; i < 3; i++) {
    for(var j = 0; j < 2; j++) {
        media += matriz[i][j];
        matriz[i][2] = media / 2  ;
    }
    media = 0;
}


console.table(matriz);