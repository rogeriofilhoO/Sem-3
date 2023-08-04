//Codado por Rogério e João Gabriel.

export class Personagem {

    protected nome : string;
    protected ataque : number;
    protected defesa : number;
    protected vida : number;
    protected nivel : number;
    constructor(nome : string, ataque : number = 1, defesa : number = 1, vida : number = 10, nivel : number = 1) {
        this.nome = nome;
        this.ataque = ataque;
        this.defesa = defesa;
        this.vida = vida;
        this.nivel = nivel;
    }

    static combate = (atacante : any, defensor : any) : void => {
        do{
            if(defensor.defesa >= atacante.ataque) {
                console.log(`[Defendeu]! O ataque de ${atacante.nome} não foi efetivo!`);
            } else if (defensor.defesa < atacante.ataque) {
                let dano = (atacante.ataque - defensor.defesa);
                console.log(`[Acerto]: ${atacante.nome} deu ${dano} de dano em ${defensor.nome}.`);
                defensor.vida -= dano;
                
            }

            if(atacante.defesa >= defensor.ataque) {
                console.log(`[Defendeu]! O ataque de ${defensor.nome} não foi efetivo!`);
            } else if (atacante.defesa < defensor.ataque) {
                let dano = (defensor.ataque - atacante.defesa);
                console.log(`[Acerto]: ${defensor.nome} deu ${dano} de dano em ${atacante.nome}.`);
                atacante.vida -= dano;
            }

        } while(defensor.vida > 0 && atacante.vida > 0);
        
        /*IMPLEMENTAR
        * SE o defensor possui DEFESA maior que o poder de ATAQUE do atacante nada acontece
        * CASO CONTRÁRIO o defensor sofre o dano de "atacante.ataque" em sua sua vida.
        * SE o atacante possui DEFESA maior que o poder de ATAQUE do defensor nada acontece
        * CASO CONTRÁRIO o atacante sofre o dano de "defensor.ataque" em sua sua vida.
        */
        
        if(atacante.vida <= 0) {
            console.log(`[MORTE]: ${atacante.nome} perdeu o jogo!`);
        } else if(defensor.vida <= 0) {
            console.log(`[MORTE]: ${defensor.nome} perdeu o jogo!`);
        }
        
        
        /* * Ao término de danos resolvidos, verifique a vida dos dois e caso algum tenha "morrido",
        * informar com a mensagem no console.log(): 
        * "[MORTE]: o personagem NOME_PERSONAGEM perdeu o jogo."
        * */
        
    }


    subirNivel = () : void => {
        this.nivel++;
        this.ataque += 4;
        this.defesa += 4;
        this.vida += 10;

        console.log(`
        [NIVEL++]:  ${this.nome}: 
                    NVL [${this.nivel - 1}] >>>>> NVL [${this.nivel}]
                    --------
                    ATQ [+4]
                    DEF [+4]
                    VDA [+10]
                `);
        
        /*IMPLEMENTAR: 
         * A cada vez que o Personagem sobe de nível você deve:
         * Incrementar o ataque em 4
         * Incrementar a defesa em 4
         * Incrementar a vida em 10
        */
    }

    gerarNumeroAleatorio = (qtdPossibilidades : number) : number => {
        return Math.floor(Math.random() * qtdPossibilidades);
    }

    concluirMissao = () : void => {
        //Ao concluir uma missão o personagem ganha incrementos aleatórios para seus atributos
        switch (this.gerarNumeroAleatorio(4)) {
            case 1:
                var aumentaAtaque = this.gerarNumeroAleatorio(5);
                this.ataque += aumentaAtaque
                console.log(`
        [MISSÃO CONCLUÍDA]: ${this.nome}:
                            ATQ [+${aumentaAtaque}]! 
                `);
                break;
            case 2:
                var aumentaDefesa = this.gerarNumeroAleatorio(5);
                this.defesa += aumentaDefesa;
                console.log(`
        [MISSÃO CONCLUÍDA]: ${this.nome} 
                            DEF [+${aumentaDefesa}]! 
                `);
                break;
            case 3:
                var aumentaVida = this.gerarNumeroAleatorio(10);
                this.vida += aumentaVida;
                console.log(`
        [MISSÃO CONCLUÍDA]: ${this.nome} 
                            VDA [+${aumentaVida}]! 
                `);
                break;
            default:
                aumentaAtaque = 2;
                this.ataque += aumentaAtaque;
                aumentaDefesa = 2;
                this.defesa += aumentaDefesa;
                aumentaVida = 4;
                this.vida += aumentaVida;

                console.log(`
        [MISSÃO CONCLUÍDA]: ${this.nome} 
                            ATQ [+${aumentaAtaque}]
                            DEF [+${aumentaDefesa}]
                            VDA [+${aumentaVida}]
                `);
                break;
        }
        
    }

    exibirStatus = () : void => {
        //IMPLEMENTAR a seguinte mensagem com console.log(): 
        //O personagem NOME_PERSONAGEM possui ATQ: ATAQUE_PERSONAGEM, DEF: DEFESA_PERSONAGEM, LIFE: VIDA_PERSONAGEM e  NÍVEL: NÍVEL_PERSONAGEM;
        console.log(`
        [STATUS]: ${this.nome} 
                  ATQ [${this.ataque}] 
                  DEF [${this.defesa}] 
                  VDA [${this.vida}]
                  NVL [${this.nivel}]
        `);
    }

}
