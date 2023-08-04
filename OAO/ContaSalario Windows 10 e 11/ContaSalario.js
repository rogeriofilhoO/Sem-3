//Windows 10 e 11
import { Conta } from './Conta.js';

class ContaSalario extends Conta {
  constructor(agencia, numero, cliente) {
    super(agencia, numero, cliente);
  }

  imprimirExtrato() {
      //cobrando R$1,00 de taxa para imprimir extrato em contasalario
      this.saldo--;
      console.log('A conta de número ' + this.numero + ' possui R$' + this.saldo + ' de saldo');
  }
}