
var numeros = [0, 1, 1, 2, 3, 5, 8, 13];

console.log(numeros.length);

//add no final
numeros.push(21);
console.log(numeros.length);

//add no começo
numeros.unshift(0);
console.log(numeros.length);

//remove o ultimo
numeros.pop();
console.log(numeros.length);

//remove o primeiro
numeros.shift();
console.log(numeros.length);