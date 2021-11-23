// Déclarer une variable quelconque
var maVariable = "a";

// Etudier la fonction suivante
function testPortee() {
  var nom = "Moi";
  prenom = "toi";
  for (var i = 0; i < 2; i++) {
    afficherTexte(nom + " " + prenom + " " + maVariable + " " + i);
  }
  afficherTexte(nom + " " + prenom + " " + maVariable + " " + i);
}

// Appeler la fonction de test
testPortee();
//afficherTexte(nom + " " + prenom + " " + maVariable + " " + i);

function afficherTexte(texte) {
  var maVariable = "b";
  document.write("ERREUR : " + maVariable);
}

afficherTexte();
document.write(maVariable);
