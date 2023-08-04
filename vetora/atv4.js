var prompt = require('prompt-sync')();
var prompt = require('prompt-sync')();
var a = Number(prompt("Entre com o primeiro número: "));
var b = Number(prompt("Entre com o segundo número: "));
var operação = Number(prompt("Entre com a operação desejada: "));
switch(operação){
    case 1:
        console.log("A soma deu " + (a + b))
        break;
    case 2:
        console.log("A subtração deu " + (a - b))
        break;
    case 3:
        console.log("A multiplicação deu " + (a * b))
        break;
    case 4:
        console.log("A divisão deu " + (a / b))
        break;
    default:
    console.log("Não tem nenhuma operação correspondente ");
}