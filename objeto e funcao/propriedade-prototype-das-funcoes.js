function Carro = (nome, placa) {
	this.nome = nome;
	this.placa  = placa;
	//this.fabricante = "VW";
}

Carro.prototype.fabricante = "VW";

var fox = new Carro("fox", "AAA-1111");
console.log("fox", fox);

var gol = new Carro("gol", "AAA-1112");
console.log("gol", gol);
