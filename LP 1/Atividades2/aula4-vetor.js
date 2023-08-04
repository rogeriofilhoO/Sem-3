let vetor = [10,20,30,40,50,60,70,80,90,100];
console.log(vetor);

//Adicionando
vetor[vetor.length] = 200;
console.log(vetor);

//Removendo
vetor[vetor.lenght -1] = undefined;

//Verificando tamanho
console.log(vetor.length);

//Invertendo ordem
console.log(vetor.reverse());

//Transformando array em string
console.log(vetor.toString());

//Transformando array em string separando por um caracter  
console.log(vetor.join(" - "));