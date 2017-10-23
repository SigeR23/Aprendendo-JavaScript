$( function() {
	var todosUsuarios = $("#js-all-usu");
	var selecaoUsuarios = $(".js-selecao-usu");

	function estilizarLinha() {
		selecaoUsuarios.filter(":checked").parents("tr").addClass("selecionado");
		selecaoUsuarios.filter(":not(:checked)").parents("tr").removeClass("selecionado");
	}	

	selecaoUsuarios.click(function() {
		var todosUsuariosSelecionados = selecaoUsuarios.filter(":checked").length;
		var checked = selecaoUsuarios.length === todosUsuariosSelecionados;
		todosUsuarios.prop("checked", checked);
	});

	todosUsuarios.click(function() {
		selecaoUsuarios.prop("checked", todosUsuarios.prop("checked"));

		/*if (todosUsuarios.prop("checked")) {
			selecaoUsuarios.parents("tr").addClass("selecionado");
		} else {
			selecaoUsuarios.parents("tr").removeClass("selecionado");
		}*/

		estilizarLinha();
	});

	selecaoUsuarios.change(function(evento) {
		/*
		var selecaoUsuario = $(evento.target);		
		
		if(selecaoUsuario.prop("checked")) {
			selecaoUsuario.parents("tr").addClass("selecionado");
		} else {
			selecaoUsuario.parents("tr").removeClass("selecionado");
		}
		*/

		estilizarLinha();

	});

});