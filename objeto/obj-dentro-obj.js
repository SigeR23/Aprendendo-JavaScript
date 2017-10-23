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

console.log("João", joao);

console.log("Cidade do João:", joao.endereco.cidade);