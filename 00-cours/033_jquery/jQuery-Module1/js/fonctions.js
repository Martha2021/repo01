/* Fonctions */
(function($) {

    /* Fonction anonyme et auto-exécutrice */
	alert(function (){	return arguments[0] + arguments[1];}(1,2));

	/* Fonction nommées */
	var results = (function (){	
		return arguments[0] + arguments[1];}(1,2)
		);

})(jQuery);


/* Scope */
(function() {	
	if(true){		
		var message = "cette var est affichée qd même";	
	}	
	alert("Cette var n'est pas dans la même portée et pourtant ..." + message);
})();


/* this et arguments */
function AfficheTableauArguments(){
	var resultatAffiche = "Les valeures du tableau implicite sont : ";
	for(i = 0; i < arguments.length; i++){
		resultatAffiche += arguments[i];
	}
	return resultatAffiche;
}
var lesValeuresDeMonTableau = AfficheTableauArguments("1",2,3,4,5,6);
