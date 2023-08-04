var prompt = require('prompt-sync')();
var prompt = require('prompt-sync')();
var vl = Number(prompt("Qual é valor total da compra: "));
var identificação = Number(prompt("Entre com a sua identificação: "));
switch(identificação) {
    case 1:
        console.log("O valor total é: " + vl)
        break;
    case 2:
        console.log("O valor total é: " + (vl - (vl * 0.1) ))
        break;
    case 3:
        console.log("O valor total é: " + (vl - (vl * 0.05) ))
        break;
        default:
        console.log('Não tem identificação');
}