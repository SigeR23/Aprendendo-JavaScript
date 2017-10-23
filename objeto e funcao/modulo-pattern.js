var contador = (function() {
	var valor = 0;  //privado

	return {
		incrementar : function() {
			valor++;
		},

		reset : function() {
			console.log("Valor é:", valor);
			valor = 0;
		}

	}; 
})();

contador.incrementar();
contador.incrementar();

contador.reset();

contador.incrementar();

contador.reset();
