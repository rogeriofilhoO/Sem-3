//Exercício 3
function juntarArray(ar1, ar2) {
    var ar = [];

    for(let i of ar1) {
        ar.push(i);
    }
    for(let y of ar2) {
        ar.push(y);
    }

    return ar;
}

var aux1 = [1, 3, 2, 5, 6];
var aux2 = [3, 3, 7, 9, 8];

var recebe = juntarArray(aux1, aux2);
var result = recebe.sort();
console.log(result);