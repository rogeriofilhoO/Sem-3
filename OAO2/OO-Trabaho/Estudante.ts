import { Pessoa } from './Pessoa';
export class Estudante extends Pessoa {
    private matricula: string;

    constructor(nome: string, idade: number, matricula: string) {
        super(nome, idade);
        this.matricula = matricula;
    }

    public exibirMatricula(): void {
        console.log(`Matrícula: ${this.matricula}`);
        
    }

    public static testeEstatico(): void {
        console.log('Teste de Método estático');
        
    }
}