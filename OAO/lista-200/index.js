import { Pessoa, Estudante } from './code.js';

console.log('--------------Sem Tel--------------');
var Aderbal = new Pessoa('Aderbal', 1234567890, 'Rua dos bobos nº 0', 'aderbal@ifms.edu.br');
//Observação: não pude colocar o zero no cpf de começo pq o javascript não deixa;
console.log(Aderbal);

console.log('----------Com Tel--------------');
//Para adicionar numero basta colocar mais um atributo na hora da criação da pessoa:
var Aderbal2 = new Pessoa('Aderbal2', 1234567890, 'Rua dos bobos nº 0', 'aderbal@ifms.edu.br', 67999996666);
console.log(Aderbal2);

//Estudante com e sem tel
console.log('-------------Sem Tel-------------');
var Adrastéia = new Estudante('Adrastéia', 32132132100, 'Rua sem nome nº 200', 'adrasteia@ifms.edu.br');
Adrastéia.imprimirInformacoes();

console.log('---------------Com Tel--------------');
var Adrastéia2 = new Estudante('Adrastéia2', 32132132100, 'Rua sem nome nº 200', 'adrasteia@ifms.edu.br',123123123123);
Adrastéia2.imprimirInformacoes();