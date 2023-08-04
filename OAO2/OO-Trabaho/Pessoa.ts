export class Pessoa {
    protected nome: string;
    protected idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public mostrarInformacoes(): void {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
}