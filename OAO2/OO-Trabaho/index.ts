import { Estudante } from './Estudante';
const estudante = new Estudante('Bianca chata', 15, '321654');

estudante.exibirMatricula();
estudante.mostrarInformacoes();

Estudante.testeEstatico();

//1ª forma de executar
//No terminal: npm init
//npm install -g ts-node
//npm install -g typescript
//Executar no code runner (botão play)

//2ª forma de executar
//No terminal:
//npx tsc index.ts
//node index.js
