const valores = require('./modulo.js');

let m = valores.gerarValoresMatriz(3,3);
let somar = valores.somaElementos(m);

console.table(m);
console.log(somar);