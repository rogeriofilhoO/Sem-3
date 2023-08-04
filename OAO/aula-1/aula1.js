function Fruta(nome, cor, forma) {
    this.nome = nome;
    this.cor = cor;
    this.forma = forma;

    this.descricao = function () {
        return `Essa fruta se chama ${this.nome} e possui a cor ${this.cor}`
    }
}

var uva = new Fruta('Uva', 'roxa', 'Redonda');
var maca = new Fruta('Maçã', 'Vermelha', 'Redonda');

console.log(uva.descricao());



