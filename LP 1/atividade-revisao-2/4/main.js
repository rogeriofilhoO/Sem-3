const valores = require('./modulo.js');

let m4 = valores.gerarValoresMatriz(3,3);
let media = valores.mediaMatriz(m4);

console.table(m4);
console.log(media);