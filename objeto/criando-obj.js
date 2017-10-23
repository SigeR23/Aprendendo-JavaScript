var fox = {
	cor: "prata",
	modelo: "Fox",
	fabricante: "VW"
}

console.log("Fox:", fox);
console.log(typeof fox);

console.log("Cor do Fox:", fox.cor);
// fox.cor = fox["cor"]
//pintando o fox

fox.cor = "Branco";
console.log("Cor do Fox depois de pintado:", fox.cor); 

//adicionando nova propriedade para o objeto fox
fox.peso = 1100;
console.log("Fox:", fox);

//adicionando nova propriedade do tipo function para o objeto fox
fox.ligar = function() {
	console.log("Ligando o Carro!")
}

console.log("Fox:", fox);
fox.ligar();

var celta = {
	cor: "branco",
	modelo: "celta",
	fabricante: "GM",
	ligar: function() {
		console.log("Ligando o Celta!")
	},
}

console.log("Celta", celta);

celta.ligar();