// Diferença entre pessoa e objeto:

//var numero = 10;
//console.log (typeof numero);

//var objeto = {};
//console.log (typeof objeto);

//---------------

//Criando um objeto:

var pessoa = {};
pessoa.nome = 'Cross';
pessoa.sobrenome = 'Smart'
pessoa.idade = 24;
console.log(pessoa);

//objeto com uma característica específica:

console.log(pessoa.idade);

//Criando um objeto sem propriedades:

var uva = new Object();

//deletar um parâmetro;

delete pessoa.sobrenome;