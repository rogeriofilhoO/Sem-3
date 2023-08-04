//Código feito por Rogério e João Gabriel


//O strict mode do ECMAScript 5 é uma forma de optar por uma variante restrita do JavaScript. 
//O strict mode não é apenas um subconjunto: ele intencionalmente tem semânticas diferentes do código normal

//O strict mode faz várias mudanças nas semânticas normais do JavaScript. Primeiro, o strict mode elimina alguns erros silenciosos do JavaScript fazendo-os lançar exceções.
//Segundo, o strict mode evita equívocos que dificultam que motores JavaScript realizem otimizações: código strict mode pode às vezes ser feito para executar mais rápido que
//código idêntico não-strict mode. Terceiro, strict mode proíbe algumas sintaxes que provavelmente serão definidas em versões futuras do ECMAScript.

//Basicamente ele verifica de uma maneira mais "estrita" se realmente tem um erro, pois o javascript as vezes pode deixar algo passar;
//geralmente utilizado em HTML;
//Para ver se alguma variavel não foi declarada ou algo do gênero

"use strict"

//Declarando
const v = () => {
    let a = "Carlos";
    console.log("Nome: " + a);
}
v();

//Não Declarando (dando erro e avisando no console do HTML)
const p = () => {
    b = "Carlos";
    console.log("Nome: " + b);
}
p();

//Porem se tirarmos o strict e utilizar a função p ela vai funcionar mesmo não declarando porque o
//javascript deixa passar.