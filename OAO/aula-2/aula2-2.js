class Matematica {
    pi = 3.141592;

    static soma(num1, num2) {
        return num1 + num2;
    }

    static divisao(num1, num2) {
        return(num2 == 0)? 'Não é divisivel por zero' : num1 / num2;  
    }

    static areaCirculo(raio) {
        return this.pi * raio ** 2;
    }
}

var resultado = Matematica.divisao(4,0);
console.log(resultado);







//-------------------------------------------------------------------------------------

var numeroemString = 'asdadawd';
var numeroConvertido = Number.parseFloat(numeroemString);
console.log(numeroConvertido);
var ehNumeroInvalido = Number.isNaN(numeroConvertido);


if(ehNumeroInvalido) {
    console.log('Não é um número válido!')
}

//o de cima e de baixo são iguais
ehNumeroInvalido && console.log('Não é um número válido!');