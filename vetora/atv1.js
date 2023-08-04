var prompt = require('prompt-sync')();
let a =Number(prompt("Entre com um valor: "));
let b =Number(prompt("Entre com outro valor: "));

console.log((a>b) ? "o valor " + a + " é maior que o outro valor": "o valor "  + b + " é maior que o outro valor");