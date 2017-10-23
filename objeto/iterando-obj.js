var joao = {
	nome: "Joao",
	idade: 25,

	//outro obejto
	endereco: {
		logradouro: "Av Brasil",
		numero: 100,
		complemento: "Apto 202",
		cidade: "Rio de Janeiro",
		estado: "RJ"
	}
}

for (var propriedade in joao) {
	
	console.log("Propriedade:", propriedade, " ->",  joao[propriedade]);

}