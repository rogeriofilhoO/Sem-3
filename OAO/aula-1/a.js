//função de objetos:

function Fruta(nome, cor, forma) {
    this.nome = nome;
    this.cor = cor;
    this.forma = forma;
    this.descricao = function() {
        return 'Essa fruta se chama ' + this.nome + ' e possui a cor ' + this.cor + ' seu formato é ' + this.forma;
    }
}

//Ele cria uma nova função para ser usado como 'new Object()' ou 'new Array()' mas desta vez da pra fazer com a Fruta;

new Fruta();

//dentro do parenteses tem os parâmetros ja estabelecidos nas linhas 4-6;

//Criando uma variavel uva com a nova função:

var uva = new Fruta('Uva', 'Roxa', 'Redonda');
//console.log(uva);

var laranja = new Fruta('Laranja', 'Laranja', 'Redonda');
//console.log(laranja);


//descrição
//Mostrar a descrição utilizando 'descricao();'
console.log(uva.descricao());