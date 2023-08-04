class ContaSalario extends Conta{
    imprimirExtrato() {
        //Cobrando R$1 de taxa
        if(this.saldo >= 1) {
            this.saldo--;
            return `A conta ${this.numero} possui R$${this.saldo}`;
        } else {
            return '[ERRO]: Saldo insuficiente para extrair o Extrato!'
        }
    }
}