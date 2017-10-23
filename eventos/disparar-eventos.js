$(function(){

	var atividade = $("#atividade");
	var lista = $("#lista-atividades");

	atividade.keyup(function (e) {
		
		if(e.keyCode === 13) {
			//disparar evento...
			atividade.trigger("enter", atividade.val());
			atividade.val("");
			
		}
		

	});

	atividade.on("enter", function(e, texto) {
		lista.prepend("<li>" + texto + "</li>");
	});
});