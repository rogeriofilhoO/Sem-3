console.log('---------------------------------------------------');
//Class , serve para criar uma função, que dentro tem seus parâmetros construidos pelo 'construct'
{
    class User {
        constructor(nickname, password) {
            this.nickname = nickname;
            this.password = password;
        }
    }

    var user = new User('John', '123');

    console.log(user);
}

console.log('---------------------------------------------------');
//if e else ,if é uma condição onde se a condição funcionar vai fazer o código dentro do bloco, 
//o else é mais um complemento do if , onde se a condição não funcionar , ele vai fazer oq estiver no bloco do else.
{
    var x = 2;

    if (x = 2) {
        console.log('true');
    } else {
        console.log('false');
    }

}

console.log('---------------------------------------------------');
//do e while, é um laço de repetição ou loop, onde o do vai representar oq vai se repentir equanto o laço não acabar,
//e o while diz a condição para terminar o laço.
{
    var y = 0;
    do {
        console.log('divertido');
        y++;
    } while (y != 5);

}

console.log('---------------------------------------------------');
// switch , case, default trabalham juntos, o switch é uma condição por casos, onde quem determina a condição são os casos,
//nesse caso o case, o deafult ele é um parâmetro padrão case nenhum dos casos seja ativado;
//Também tem o break, ele basicamente termina a condição do case/switch no caso mesmo;

{
    let c = 2
    switch (true) {
        case c = 2:
            console.log('certo');
            break;

        case c < 2 || c > 2:
            console.log('errado');
            break;

        default:
            console.log('Matemática basica');
            break;
    }
}

console.log('---------------------------------------------------');
// return, geralmente usado para retornar um resultado de uma função;
{
    const person = {
        firstname: 'Roseane',
        lastname: 'Grosteotenoffe',
        fullname: function () {
            return this.firstname + " " + this.lastname;
        }
    }

    console.log(person.fullname());
}
console.log('---------------------------------------------------');