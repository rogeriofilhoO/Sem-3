//numeros primos de 1 a 50

//var iniciar com 1;
for(let i = 0; i <= 50; i++) {
    let primo = true;
    for(let j = 2; j < i; j++) { 
        if(i % j == 0) {
            primo = false;
            break;
        }
    }
    if(primo) {
        console.log(i);
    }
}