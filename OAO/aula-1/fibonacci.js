///sequencia de fibonacci ..

let n1 = 0;
let n2 = 1;

console.log(n1);
console.log(n2);
for(let index = 3; index < 15; index++) {
    let n3 = n1 + n2;
    console.log(n3);
    n1 = n2;
    n2 = n3;
}