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

delete joao.idade;

console.log("João", joao);


delete joao.endereco.estado;

console.log("João", joao);
