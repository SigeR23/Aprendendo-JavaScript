var criarNovoCarro = function(nome, placa) {
	return {
		nome: nome,
		placa: placa,
		fabricante: "VW"
	}
}


var fox = criarNovoCarro("fox", "AAA-1111");
console.log("fox", fox);
