//  1. Escreva uma função que receba um número e retorne "Fizz" se 
//  o número for divisível por 3, "Buzz" se o número for divisível por 5 e
//   "FizzBuzz" se o número for divisível por ambos.

var prompt = require('prompt-sync')();

var n = Number(prompt("Insira um numero: "));

// if else
if((n % 3) == 0 && (n % 5) == 0) {
    console.log("FizzBuzz");
} else if((n % 5) == 0) {
    console.log("Buzz");
} else if ((n % 3) == 0) {
    console.log("Fizz");
}

// ternario
var ternariodivertido = (n % 5 == 0 && n % 3 == 0) ? "FizzBuzz" : (n % 5 == 0) ? "Buzz" : (n % 3 == 0) ? "Fizz": "";
console.log(ternariodivertido);


//Switch
switch(true) { // esta recebendo true para que funcione as operações

    case n % 3 == 0 && n % 5 == 0: //aqui vai verificar se a operação verdadeira
        console.log("FizzBuzz");
        break;

    case n % 3 == 0:
        console.log("Fizz");
        break;

    case n % 5 == 0:
        console.log("Buzz");
        break;

    default:
        console.log(n);
        break;

}