const enter = require('prompt-sync')();
var senha = enter('Digite a senha:');
let verify = (senha == 'ifms123') ? 'Acesso autorizado' : 'Acesso negado';
console.log(verify);