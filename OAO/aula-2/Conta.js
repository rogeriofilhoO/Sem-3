export class Conta {
    constructor(agencia, numero, cliente, saldo) {
        //Atributos
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo;
    }

    //Método
    depositar(valor) {
        if(valor <= 0) {
            console.log('[ERRO]: Valor inválido');
        } else{
            this.saldo += valor;
            console.log("Adicionado: R$" + valor);
            this.imprimirExtrato();
        }
    }

    sacar(valor) {
        if(this.saldo < valor){
            console.log('[ERRO]: Não foi possivel sacar o dinheiro');
        } else if(valor <= 0) {
            console.log('Valor inválido');
        } else {
            this.saldo -= valor;
            console.log("Retirado R$" + valor);
            this.imprimirExtrato();
        }
    }

    //Método
    imprimirExtrato() {
        console.log(`[SALDO] : R$${this.saldo}`);
    }
}
