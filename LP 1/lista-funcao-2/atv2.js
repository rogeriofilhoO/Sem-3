//Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa
//anual de crescimento de 3% e que a população de B seja 200000 habitantes com uma taxa
//de crescimento de 1.5%. Faça um programa que calcule e escreva o número de anos
//necessários para que a população do país A ultrapasse ou iguale a população do país B,
//mantidas as taxas de crescimento.

var pA = 80000;
var pB = 200000;

function Contagem(tA,tB) {
    for(var i = 0; pA <= pB; i++) {
        tA = pA * 0.03;
        tB = pB * 0.015;
        pA += tA;
        pB += tB;
    }

    console.log(`Para igualar e passar é: ${i} anos`);
}

Contagem();
