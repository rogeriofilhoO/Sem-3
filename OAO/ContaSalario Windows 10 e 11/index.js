//Windows 10 e 11
import { Conta } from './Conta.js';

var contaDoAderbal = new Conta(123, 123, 'Aderbal');
contaDoAderbal.depositar(100);
contaDoAderbal.imprimirExtrato();