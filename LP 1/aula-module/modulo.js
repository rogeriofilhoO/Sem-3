//Exemplo 1
//Exportar valor variavel em formato commonJs

const PI = 3.14;
let contador = 2;
var auxiliar = 3;

//Acessando direto
// module.exports = PI;

//Com varios

module.exports = {
    PI : PI,
    contador : contador,
    auxiliar : auxiliar,
    array : [1,2,3,4,5],
    matriz : [[1,2], [3,4]],

    //Função soma
    soma : function(a,b) {
        return a + b;
    }
};