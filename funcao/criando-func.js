//function declaration
function somar(a, b) {
	return a + b;
}

//funcion expression
var sub = function(a, b) {
	return a - b;
}

console.log("6 + 7 =", somar(6, 7));
console.log("6 - 7 =", sub(6, 7));


console.log("typeof sub:", typeof(sub));