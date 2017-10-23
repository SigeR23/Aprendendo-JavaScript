//global(fora de uma função)
var nome = "Teste";

function capitalizar() {
	//local(capitalizar)
	var nome ="Teste".toUpperCase();
}

function capitalizar2() {
	//global
	nome ="Teste".toUpperCase();
}


capitalizar();
console.log("nome:", nome);

capitalizar2();
console.log("nome: ", nome);