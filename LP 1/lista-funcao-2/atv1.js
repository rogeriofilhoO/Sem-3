//1. Faça uma função para o cálculo de uma folha de pagamento, sabendo que os
//descontos são do Imposto de Renda, que depende do salário bruto (conforme
//tabela abaixo) e 3% para o Sindicato e que o FGTS corresponde a 11% do
//Salário Bruto, mas não é descontado (é a empresa que deposita). O Salário
//Líquido corresponde ao Salário Bruto menos os descontos. O script deverá
//pedir ao usuário o valor da sua hora e a quantidade de horas trabalhadas no
//mês.
// Desconto do IR:
//  ▪ Salário Bruto até 900 (inclusive) - isento
//  ▪ Salário Bruto até 1500 (inclusive) - desconto de 5%
//  ▪ Salário Bruto até 2500 (inclusive) - desconto de 10%

const prompt = require('prompt-sync')();

var valordeHora = Number(prompt('Qual o valor da hora trabalhada: '));
var horasTrabalhado = Number(prompt('Horas trabalhadas: '));

function folhadePagamento(vH, hT, bruto, Líquido) {
    vH = valordeHora;
    hT = horasTrabalhado;
    bruto = vH * hT;

    //Aplicação dos impostos padrão

    //Sindicato
    var retirar = 0;
    retirar = bruto * 3 / 100;
    Líquido = bruto - retirar;

    //FGTS
    var retirar = 0;
    retirar = bruto * 11 / 100;
    Líquido = Líquido - retirar;

    //Impostos condicionais
    if(bruto > 900 && bruto <= 1500) {
        let aux = 0;
        aux = bruto * 5 / 100;
        Líquido	= Líquido - aux;
    } else if(bruto > 1500 && bruto <= 2500) {
        let aux = 0;
        aux = bruto * 10 / 100;
        Líquido = Líquido - aux;
    }

    console.log(`Salario bruto: ${bruto}`);
    console.log(`Salario líquido (com impostos) : ${Líquido}`);
}

console.log(folhadePagamento());