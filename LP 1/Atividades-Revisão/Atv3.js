const enter = require('prompt-sync')();
var v = Number(enter('Numero:'));
var maior = v;
var menor = v;

for (let i = 1; i < 10 ; i++) {
  v = Number(enter('Numero:'));

  if(v > maior) {
    maior = v;
  } 

  if(v < menor) {
    menor = v;
  }
}

console.log(`Maior:${maior} e Menor:${menor}`);