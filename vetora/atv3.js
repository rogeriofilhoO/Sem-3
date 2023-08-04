var prompt = require('prompt-sync')();
let a =Number(prompt("Quantidade de maçãs: "));


console.log((a<=11) ? a*0.30 : a*0.25);