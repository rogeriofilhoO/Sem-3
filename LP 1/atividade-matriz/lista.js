//Criador de funções
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


//Soma; Atividade 1

function soma(matriz) {
    const prompt = require('prompt-sync')();
    var soma = 0;

    var lin = prompt("Quantas linhas? ");
    var col = prompt("Quantas colunas? ");

    for (var i = 0; i < lin; i++) {
        for (var j = 0; j < col; j++) {
            soma += matriz[i][j];
        }
    }

    console.table(matriz);
    return soma;
}

var m1 = criamatriz(3, 3);
console.log(soma(m1));

//Soma de Matrizes; Atividade 2

function somaMatrizes(matriz1, matriz2) {
    const prompt = require('prompt-sync')();
    var somatotal = 0;

    var lin = prompt("Quantas linhas? ");
    var col = prompt("Quantas colunas? ");

    for (var i = 0; i < lin; i++) {
        for (var j = 0; j < col; j++) {
            somatotal += matriz1[i][j] + matriz2[i][j];
        }
    }

    console.table(matriz1);
    console.table(matriz2);
    return somatotal;
}

var m2 = criamatriz(3, 3);
var m3 = criamatriz(3, 3);
console.log(somaMatrizes(m2, m3));

// Multiplica por dois os elementos; Atividade 3

function multi2(matriz) {
    const prompt = require('prompt-sync')();

    var newmatriz = [];

    var lin = prompt("Quantas linhas? ");
    var col = prompt("Quantas colunas? ");

    for (var i = 0; i < lin; i++) {
        newmatriz[i] = [];
        for (var j = 0; j < col; j++) {
            newmatriz[i][j] = matriz[i][j] * 2;
        }
    }

    console.table(matriz);
    console.log("Agora ela multiplicada por 2");
    console.table(newmatriz);
}

var multi = criamatriz(3, 3);
multi2(multi);

// Soma das colunas; Atividade 4

function somaColuna(matriz) {
    let ar = new Array(matriz.length);

    for (let i = 0; i < matriz.length; i++) {
        ar[i] = 0;
        for (let j = 0; j < matriz.length; j++) {
            ar[i] += matriz[j][i];
        }

    }


    console.log(`A soma das colunas é: ${ar}`);

}


var m4 = criamatriz(3, 3);
console.table(m4);
somaColuna(m4);

// Verificar igualdades de matrizes; Atividade 5

function VeriMatrizIgual(matriz1, matriz2) {

    if (matriz1.length === matriz2.length) {
        console.log("O tamanho das matrizes são iguais!");

        for (let i = 0; i < matriz1.length; i++) {
            for (let j = 0; j < matriz1.length; j++) {
                if (matriz1[i][j] === matriz2[i][j]) {
                    break;
                } else {
                    console.log(`Os elementos não são iguais`);
                    return;
                }
            }
        }
        console.log(`Os elementos são Iguais!`);
    } else {
        console.log("O tamanho não é igual!");
    }


}

var m5 = criamatriz(3, 3);
var m6 = criamatriz(3, 3);

console.table(m5);
console.table(m6);
VeriMatrizIgual(m5, m6);

//Par ; Atividade 6;

function Par(matriz) {

    let qnt = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] % 2 == 0) {
                qnt++;
            }
        }
    }
    console.table(matriz);
    console.log(`Tem ${qnt} elementos pares`);
}

var m7 = criamatriz(3, 3);

Par(m7);

//Média; Atividade 7;

function Media(matriz) {
    let soma = 0;
    let qnt = 0;
    for (var i = 0; i < matriz.length; i++) {
        for (var j = 0; j < matriz.length; j++) {
            soma += matriz[i][j];
            qnt++;
        }
    }

    console.table(matriz);
    console.log(`A soma dos elementos é: ${soma}`);
    console.log(`A quantidade de elementos: ${qnt}`);
    let result = soma / qnt;

    console.log(`A média é: ${result}`);

}
var m8 = criamatriz(3, 3);

Media(m8);

//Coded by Rogério Filho;