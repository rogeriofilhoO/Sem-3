class Fruta {
    constructor(nome, cor, forma) {
        this.nome = nome;
        this.cor = cor;
        this.forma = forma;
    }

    descricao() {
        return `Essa fruta se chama ${this.nome} e tem cor ${this.cor}`
    }
}

var uva = new Fruta('Uva', 'Roxa', 'Redonda');
console.log(uva.descricao());
