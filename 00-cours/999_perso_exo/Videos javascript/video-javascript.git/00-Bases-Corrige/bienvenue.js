// Ecrire une fonction qui permet d'afficher un message de Bienvenue
function bienvenue() {
  // Ecriture du message de bienvenue dans la page
  document.write("Bienvenue sur cette page ! <br>");
}

// Appel de la fonction de bienvenue
bienvenue();

// Ecrire une fonction qui affiche un texte donné en paramètre
function afficherTexte(texte) {
  document.write(texte + "<br>");
}

afficherTexte("Ceci affiche mon texte");

// Ecrire une fonction qui renvoie un message personnalisé
function construireTextePersonnalise() {
  // Déclarer une variable contenant un texte
  var texte = "Cette page permet d'apprendre le Javascript";
  // Mettre le texte en majuscule
  texte = texte.toUpperCase();
  // Renvoyer le texte à l'appelant
  return texte;
}

// On affiche le texte personnalisé
var message = construireTextePersonnalise();
afficherTexte(message);

// On appelle les deux fonctions en une ligne
afficherTexte(construireTextePersonnalise());
