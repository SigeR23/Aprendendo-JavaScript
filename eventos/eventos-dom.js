	$(function(){

	$("#botao1").click(function(e){

		console.log(e);
	});

	$("#link1").click(function(e){
		console.log("link 1 clicado");
		e.preventDefault(); //interrompe o comportamento padrão
	});

	$("#input1").keyup(function(e) {
		console.log(e);

	}); 
	
});  