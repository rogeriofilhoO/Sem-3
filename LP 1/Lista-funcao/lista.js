const PromptSync = require("prompt-sync");

//Crie uma função (criada em uma variavel) que dado dois valores (passados
//como parâmetros) mostre no console a soma, subtração, multiplicação e
//divisão desses valores.
var func = function(a, b) {
   return `Numeros: ${a} e ${b}. Soma: ${a + b}, Subtração: ${a - b}, Multiplicação: ${a * b}, Divisão: ${a / b}`;   
}

console.log(func(6, 5));

console.log('-----------------------------------------------------------');
//Crie uma função chamada converteParaCelsius que recebe uma temperatura
//em Fahrenheit como parâmetro e “retorna” essa temperatura em Celsius. A
//fórmula para conversão é: C = (F - 32) / 1.8.
const p = require("prompt-sync")();
var converteParaCelsius = function(F) {
   return `Fahrenheit: F°${F}, em Celsius: C°${(F - 32) / 1.8}`
}

console.log(converteParaCelsius(Number(p('Fahrenheit: '))));

console.log('-----------------------------------------------------------');
//Escreva uma função (usando arrow function) que receba dois parâmetros início
//e fim. Essa função deve imprimir todos os números ímpares que estão entre
//esses valores. Por padrão os valores devem ser 0 para início e 100 para fim.
//Mas caso esteja ao contrario o codigo deve ter um condição que corriga a
//ordem dos parâmetros caso a função receba o valor maior antes do menor.

var arrow = (inicio, fim) => {
   if(inicio == 100 && fim == 0) {
      var aux = 0;
      aux = inicio;
      inicio = fim;
      fim = aux;
   }

   for(var i = inicio; i <= fim; i++){
      if(i % 2 !== 0) {
         console.log(`Impar: ${i}`);
      } 
   }
}
console.log(arrow(100,0));

console.log('-----------------------------------------------------------');
//Crie uma função chamada contaLetras que recebe uma string como parâmetro e retorna um
//objeto contendo a contagem de cada letra presente na string. Por exemplo, a string "banana"
//deve retornar { b: 1, a: 3, n: 2 }

function contaLetras(string) {
   let objeto = {};
   for(let i = 0; i < string.length; i++) {
      if(objeto[string[i]] == undefined){
         objeto[string[i]] = 1;
      } else {
         objeto[string[i]]++
      }
   }
   return objeto;
}
console.log(contaLetras('banana'));