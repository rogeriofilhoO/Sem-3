const valores = require('./modulo.js');

let m2 = valores.gerarValoresMatriz(3,3);
let somarPar = valores.somaParElementos(m2);

console.table(m2);
console.log(somarPar);