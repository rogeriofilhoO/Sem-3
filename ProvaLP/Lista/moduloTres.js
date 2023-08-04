export function Media(matriz) {
    var somael = 0;
    var qnt = 0;

    for(var i = 0; i < matriz.length; i++) {
        for(var j = 0; j < matriz[0].length; j++) {
            if(i == 0) {
                somael += matriz[i][j];
                qnt++;
            }   

            if(j == 2 && i != 0){
                somael += matriz[i][j];
                qnt++;
            }
        }
    }

    console.log(`A média é: ${parseFloat(somael / qnt).toFixed(1)}`);
}