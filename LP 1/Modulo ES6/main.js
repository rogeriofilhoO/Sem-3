import {pi, auxiliador, contador, frutas} from "./module.js";

console.log(pi);
console.log(contador);
console.log(auxiliar);


function gerarMatriz(linha, coluna) {
    let matriz = [];
    for(let i = 0; i < linha; i++) {
        matriz[i] = [];
        for(let j = 0; j < coluna; j++) {
            matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }
}

console.log(gerarMatriz(linha, coluna));
console.log(calculaSoma(2,5));

//para executar tenho que iniar um arquivo json
//Execute esse comando npm init -y na pasta com os arquivos nela;