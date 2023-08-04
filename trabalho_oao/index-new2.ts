import { Personagem } from './Personagem-new2';

var mago = new Personagem('AderbalProPlayer');
mago.concluirMissao();
mago.concluirMissao();
mago.concluirMissao();
mago.subirNivel();
mago.exibirStatus();

var arqueiro = new Personagem('SerginhoMalandroxD');
arqueiro.concluirMissao();
arqueiro.concluirMissao();
arqueiro.concluirMissao();
arqueiro.subirNivel();
arqueiro.exibirStatus();


Personagem.combate(mago, arqueiro);
mago.exibirStatus();
arqueiro.exibirStatus();


//1ª forma de executar
//No terminal: npm init
//npm install -g ts-node
//npm install -g typescript
//Executar no code runner (botão play)
