// Condição Ternária
// ternário só com 1 condição
var idade = 18;
var podeVotar = (idade >= 18) ? "Pode votar" : "Não pode votar";
console.log(podeVotar);


// Ternário com mais de 1 condição

var idade = 18;
var podeVotar = (idade >= 18) ? "Pode votar" : (idade >= 16) ?
    "Pode votar" : "Não pode votar";
console.log(podeVotar);