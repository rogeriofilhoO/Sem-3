// 1
let array = [2, 1, 3, 4, 5, 6, 7, 8, 9, 10];
let par = new Array();
for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 == 0) {
        par.push(array[index]);
    }
}
console.log(array);
console.log(par);

console.log('-----------------------------------------------------');
// 2

let sena = [1, 17, 24, 38, 50];
let aposta = [3, 16, 27, 38, 50];
let pts = 0;
for (let i = 0; i < sena.length; i++) {
    for (let j = 0; j < aposta.length; j++) {
        if (sena[i] == aposta[j]) {
            pts++;
        }
    }
}

console.log('Pontos: ' + pts);

console.log('----------------------------------------------------');
// 3
var frutas = ["Abacaxi", "Morango", "Abacaxi", "Maçã", "Maçã", "Maçã"];
var contagem = {};

for(let i = 0; i < frutas.length; i++) {
    if(contagem[frutas[i]]) {
        contagem[frutas[i]]++;
    } else {
        contagem[frutas[i]] = 1;
    }
}
console.log(frutas);
console.log(contagem);

console.log('----------------------------------------------------');
//4

var numbers = new Array(1, 2, 3, 4, 5);
var soma = 0;
for(let i = 0; i < numbers.length; i++) {
    soma += numbers[i]; 
}

var media = soma / numbers.length;

const results = {
    soma: soma,
    média: media
}
console.log(numbers);
console.log(results);
console.log('----------------------------------------------------');
