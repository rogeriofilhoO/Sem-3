const enter = require('prompt-sync')();
var tab = Number(enter('Qual tabuada:'));

for (let i = 1; i < 11; i++) {
    console.log(`${tab} x ${i} = ${tab * i}`);
}