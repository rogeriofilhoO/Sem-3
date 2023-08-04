var frutas = new Array('Maçã', 'Pêra', 'Laranja', 'Uva', 'Manga');

// Posição 2
console.log(frutas[2]);

// *Tente acessar a posição 4
console.log(frutas[4]);

// *Tente alterar o elemento 6 execute e tente comentar
//  no seu código e ao professor o que esta acontecendo
frutas[6] = undefined;
console.log(frutas[6]);
frutas[6] = 'Limão'
console.log(frutas);
console.log(frutas[6]);
    //Basicamente eu criei uma parte do vetor de posição 6
    //como undefined para que ele exista, e depois modifiquei para
    //ser um Limão

//Adicionando
frutas.push("Maracujá");
console.log(frutas);

//Tentando adicionar no começo do Array
frutas.unshift('Kiwi');
console.log(frutas);

//Tentando remover no inicio do Array
frutas.shift();
console.log(frutas);
    //Agora sem o Kiwi

//Tamanho 
console.log(frutas.lenght);

//invertendo a ordem do array
console.log(frutas.reverse());

//Transformando array em string e separando por um caracter
console.log(frutas.join(" - "));
