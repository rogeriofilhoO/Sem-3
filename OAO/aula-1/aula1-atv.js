class Pessoa { 
    constructor(nome, email, cpf){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }

    imprimirDetalhes() {
        return `O nome da pessoa é: ${this.nome} e o email é: ${this.email}`
    }

}
