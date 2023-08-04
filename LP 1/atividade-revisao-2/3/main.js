const valores = require('./modulo.js');

let m3 = valores.gerarValoresMatriz(3,3);
let somarCol = valores.somaColunaElementos(m3);

console.table(m3);
console.log(somarCol);