//Atividade 1

const p = require('prompt-sync')();
var lados = Number(p('Quantidade de Lados: '));
var medi = Number(p('A medida dos lados: '));

switch(lados) {
    case 3:
        console.log('Triângulo');
        let area = (medi * medi) / 2;
        console.log(`A area do triângulo é: ${area}`);
        break;
    case 4:
        console.log('Quadrilátero');
        let area2 = medi * medi;
        console.log(`A area do quadrilatero é: ${area2}`);
        break;
    case 5:
        console.log('Pentágono');

    default :
        break;
}

console.log('------------------------------------------------');

//Atividade 2
var i = 1;
var fator = 1;

do { 
    i++;
    fator = fator * i
} while(i < 20);

console.log(fator);

console.log('-------------------------------------------------');

//Atividade 3

var ar = new Array(1,23,45,67,8,9);
var maior1 = 0;
var maior2 = 0;

for(var i = 0; i < ar.length; i++) {
    for(var j = 0; j < ar.length; j++) {
        if(ar[i] > ar[j] && ar[i] > maior1) {
            maior1 = ar[i];
        }

        if(ar[i] < ar[j] && ar[i] > maior2) {
            maior2 = ar[i];
        }
    }
}
console.log(ar);
console.log(`Maior: ${maior1}`);
console.log(`Segundo maior: ${maior2}`);

console.log('---------------------------------------------------------');
//Atividade 4

function Operacoes (n1,n2,op) {
    switch(op) {
        case '-':
            console.log(n1-n2);
            break;
        case '+':
            console.log(n1+n2);
            break;
        case '/':
            console.log(n1/n2);
            break;
        case '*':
            console.log(n1*n2);
            break;
        case '%':
            console.log(n1%n2);
            break;
    }
}

Operacoes(2,4,'-');
Operacoes(2,4,'+');
Operacoes(2,4,'*');
Operacoes(2,4,'/');
Operacoes(2,4,'%');
