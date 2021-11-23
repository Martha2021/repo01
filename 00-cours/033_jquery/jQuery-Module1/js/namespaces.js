/* Namespaces */

(function($) {

    // Déclaration
	MonNamespace = window.MonNamespace || {};
    MonNamespace.Objet1 = {};
    MonNamespace.Variable1 = "";
    MonNamespace.Tableau1 = [];
    MonNamespace.Fonction1 = function(p){
        alert("appel de fonction: " + p);
    };
    
    // Exécution
    MonNamespace.Fonction1("dans le fichier js");

})(jQuery);


