// Ecrire une fonction qui prend en paramètre un nombre, et qui affiche si ce nombre est pair ou impair
function pairOuImpair(nombre) {
  if (nombre % 2 !== 0) {
    afficherTexte("Nombre pair");
  } else {
    afficherTexte("Nombre impair");
  }
}

// Tester la fonction avec un nombre pair, puis un nombre impair
pairOuImpair(10);
pairOuImpair(5);

// Vérifier le comportement si un argument n'est pas valorisé
pairOuImpair();
afficherTexte();

// Ecrire une fonction qui prend en paramètre un texte, et qui l'affiche uniquement si il est valorisé
function afficherTexteValide(texte) {
  if (texte !== undefined) {
    afficherTexte("Mon texte : " + texte);
  }
}

// Tester différents textes à afficher
afficherTexteValide();
afficherTexteValide("Un texte valorisé");
var texte;
afficherTexteValide(texte);

// Ecrire une fonction prend en paramètre un texte, et qui l'affiche uniquement si il est valorisé et que sa longueur est supérieur à 3
function afficherTexteValideMin(texte) {
  if (texte && texte.length > 3) {
    afficherTexte("Mon texte : " + texte);
  }
}

// Tester différents textes à afficher
afficherTexteValideMin();
afficherTexteValideMin("abc");
afficherTexteValideMin("abcdefghij");
