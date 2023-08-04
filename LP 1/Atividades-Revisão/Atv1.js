const prompt = require('prompt-sync')();

var n = Number(prompt('Número entre (1-7): '));

switch (true) {
    case n == 1:
        console.log('Domingo');
        break;

    case n == 2:
        console.log('Segunda-Feira');
        break;

    case n == 3:
        console.log('Terça-Feira');
        break;

    case n == 4:
        console.log('Quarta-Feira');
        break;

    case n == 5:
        console.log('Quinta-Feira');
        break;

    case n == 6:
        console.log('Sexta-Feira');
        break;

    case n == 7:
        console.log('Sábado');
        break;

    case n == 0 || n < 0:
        console.log('Invalid Number');
        break;

}
