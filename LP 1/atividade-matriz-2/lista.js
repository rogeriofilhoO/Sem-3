//Criador de matriz
function criamatriz(lin, col) {
    let matriz = [];
    for (var i = 0; i < lin; i++) {
        matriz[i] = [];
        for (var j = 0; j < col; j++) {
            matriz[i][j] = Math.floor((Math.random() * 10));
        }
    }

    return matriz;
}

//Atividade 1

function Media(matriz) {
    let soma = 0;
    let qnt = 0;
    let ar = new Array(matriz.length);

    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            soma += matriz[i][j];
            qnt++;
        }

        let result = soma / qnt;
        ar[i] = parseFloat(result).toFixed(1);
        soma = 0;
        qnt = 0;
    }

    console.table(matriz);

    console.log("As notas respectivas são: ");
    console.log(ar);
}

var m1 = criamatriz(3,3);
Media(m1);

//Atividade 2

function Somas(matriz) {
    let soma = 0;

    //Impares
    for(var i = 0; i < matriz.length; i++) {
        for(var j = 0; j < matriz.length; j++) {
            if(matriz[i][j] % 2 != 0) {
                soma += matriz[i][j];
            }
        }
    }
    console.table(matriz);
    console.log(`A soma dos impares é ${soma}`);

    //Colunas
    let ar = new Array(matriz.length);

    for(var i = 0; i < matriz.length; i++) {
        ar[i] = 0;
        for(var j = 0; j < matriz.length; j++) {
            ar[i] += matriz[j][i];
        }
    }

    console.log(`A soma das colunas é:`);
    console.log(ar);

    //Linhas
    let ar2 = new Array(matriz.length);
    
    for(var i = 0; i < matriz.length; i++) {
        ar2[i] = 0;
        for(var j = 0; j < matriz.length; j++) {
            ar2[i] += matriz[i][j];
        }
    }

    console.log(`A soma das linhas é:`);
    console.log(ar2);
    
}
var m2 = criamatriz(5,5);
Somas(m2);

//Atividade 3

function QNT(matriz){
    const prompt = require('prompt-sync')();
    let coluna = Number(prompt("Quantas colunas? "));

    let qnt = 0;
    let qnt2 = 0;
    
    for(var i = 0; i < matriz.length; i++) {
        for(var j = 0; j < coluna; j++) {
            if(matriz[i][j] % 2 != 0){
                qnt++;
            } else {
                qnt2++;
            }
        }
    }

    console.table(matriz);
    console.log(`Numeros impares: ${qnt}`);
    console.log(`Numeros pares: ${qnt2}`);
}

var m3 = criamatriz(3,5);

QNT(m3);

//Coded by Rogério Filho