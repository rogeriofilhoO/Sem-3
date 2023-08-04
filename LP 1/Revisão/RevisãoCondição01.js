//Todos os tipos de condição

var idade = 18;
if(idade >= 18) {
    console.log('Maior de idade');
} 
console.log("Menor de idade");

//Qual a diferença
if(idade >= 18) {
    console.log('Maior de idade');
} else  {
    console.log('Menor de idade');
}

//Condição composta
if(idade >= 18) {
    console.log("Maior de idade");
} else if(idade >= 16) {
    console.log("Pode votar");
} else {
    console.log('Menor de idade');
} 

//Condição com ternario
var podeVotar = (idade >= 18) ? "Pode votar": "Não pode votar";
console.log(podeVotar);

//ternario completo / como um else if
var podeVotarCompleto = (idade >= 18) ? 'Pode votar' : (idade >= 16) ? "Pode votar" : "Não pode votar";

