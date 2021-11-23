/* Closure */
$(document).ready(function(){
	var counter = 0;
	$("#idcounter").click(function(){
		counter++;
		console.log("counter: " + counter);
	});
	
});


// Gestion de this et that
(function(){
	/* Utilisation de this dans une fonction imbriquée */
	function Foobar() {
    	var that = this;
    	document.getElementById("monElement").onclick = function () {	
			var nomDuNoeud = this.tagName;	
			// Ici this désigne le noeud du DOM qui a levé l’évènement	
			// Mais that désigne le contexte de la fonction de niveau supérieur
    };
}

})();



