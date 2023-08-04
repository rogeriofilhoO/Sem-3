import {criaMatriz, somaElementos} from "./moduloUm.js";
import {somaDiagonal} from "./moduloDois.js";
import {Media} from "./moduloTres.js";
import {multiplicaUltimo} from "./moduloQuatro.js";


//Atividade 1

var m = criaMatriz(4,3);
console.table(m);
console.log(`A soma dos elementos é: ${somaElementos(m)}`);


// Atividade 2

var matrizDois = criaMatriz(4,3);
somaDiagonal(matrizDois);

//Atividade 3

var m3 = criaMatriz(4,3);
console.table(m3);
Media(m3);

//Atividade 4

var matrizQuatro = criaMatriz(4,3);
console.table(matrizQuatro);
multiplicaUltimo(matrizQuatro);


//Tipo da prova B
//Code by Rogério Filho e João Flores