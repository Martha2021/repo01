/* Tableaux */

(function($) {

    /* Tableau littéral */
	var tbCouleurs = [];
	tbCouleurs [0] = "bleu";
	tbCouleurs [1] = "vert";
	tbCouleurs [2] = "jaune";

	/* Tableau associatif */
	var tbEleves = ["Thomas", "Sofiane", "Tien"];

	var tbCouleurs2 = [];
	tbCouleurs2["bleu"] = "#0000ff";
	tbCouleurs2 ["vert"] = "#00ff00";
	tbCouleurs2 ["jaune"] = "#ffff00";

	var dateAchatProduit = new Date("", "", "");
	var monProduit = [1, "Laptop", dateAchatProduit];
	for(i in monProduit){
		document.write("<br />" + monProduit[i]);
	}

	/* fonctions tableaux */
	[1, "Laptop", dateAchatProduit].forEach(function(value, index){

	});

})(jQuery);
