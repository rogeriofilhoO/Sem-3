// Atividade 1
export class Pessoa {
    constructor(nome, cpf, endereço, email, telefone) {
        this.nome = nome;
        this.cpf = cpf;
        this.endereço = endereço;
        this.email = email;
        this.telefone = null;
        if(telefone) {
            this.telefone = telefone;
        }
    }
}

//Com telefone
var p = new Pessoa('a', 1, 's', 'd',123);
console.log(p);

//Sem telefone
var p2 = new Pessoa('a', 1, 's', 'd');
console.log(p2);

console.log('-----------//------------');

//Atividade 2
export class Estudante extends Pessoa {
    imprimirInformacoes() {
        console.log(`Nome: ${this.nome}, CPF: ${this.cpf}, Endereço: ${this.endereço}, Email: ${this.email}, Telefone: ${(this.telefone == null) ? 'Sem telefone Cadastrado' : this.telefone}`);
    }
}

console.log('--------------Primeiro com Tel----------------------');
//Com tel.
var e = new Estudante('a',123,'a','b',123123);
e.imprimirInformacoes();

console.log('-------------Segundo sem Tel-------------');
//Sem tel.
var e2 = new Estudante('a',123,'a','b');
e2.imprimirInformacoes();

console.log('-----------------------------------------------------------');