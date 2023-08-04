export class Personagem {

    constructor(nome, ataque = 1, defesa = 1, vida = 10, nivel = 1) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida;
        this.nivel = nivel;
    }

    static combate = (atacante, defensor) => {
        /*IMPLEMENTAR
        * SE o defensor possui DEFESA maior que o poder de ATAQUE do atacante nada acontece
        * CASO CONTRÁRIO o defensor sofre o dano de "atacante.ataque" em sua sua vida.
        * SE o atacante possui DEFESA maior que o poder de ATAQUE do defensor nada acontece
        * CASO CONTRÁRIO o atacante sofre o dano de "defensor.ataque" em sua sua vida.
        
        * Ao término de danos resolvidos, verifique a vida dos dois e caso algum tenha "morrido",
        * informar com a mensagem no console.log(): 
        * "[MORTE]: o personagem NOME_PERSONAGEM perdeu o jogo."
        * */
        
    }


    subirNivel = () => {
        this.nivel++;
        /*IMPLEMENTAR: 
         * A cada vez que o Personagem sobe de nível você deve:
         * Incrementar o ataque em 4
         * Incrementar a defesa em 4
         * Incrementar a vida em 10
        */

    }

    gerarNumeroAleatorio = (qtdPossibilidades) => {
        return Number.parseInt(Math.random() * qtdPossibilidades);
    }

    concluirMissao = () => {
        //Ao concluir uma missão o personagem ganha incrementos aleatórios para seus atributos
        switch (this.gerarNumeroAleatorio(4)) {
            case 1:
                this.ataque += this.gerarNumeroAleatorio(5);
                break;
            case 2:
                this.defesa += this.gerarNumeroAleatorio(5);
                break;
            case 3:
                this.vida += this.gerarNumeroAleatorio(10);
                break;
            default:
                this.ataque += 2;
                this.defesa += 2;
                this.vida += 4;
                break;
        }
    }

    exibirStatus = () => {
        //IMPLEMENTAR a seguinte mensagem com console.log(): 
        //O personagem NOME_PERSONAGEM possui ATQ: ATAQUE_PERSONAGEM, DEF: DEFESA_PERSONAGEM, LIFE: VIDA_PERSONAGEM e  NÍVEL: NÍVEL_PERSONAGEM;
    }

}