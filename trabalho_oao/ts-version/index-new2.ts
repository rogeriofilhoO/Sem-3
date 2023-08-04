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
