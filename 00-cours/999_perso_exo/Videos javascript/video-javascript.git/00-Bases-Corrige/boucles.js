// Ecrire une fonction qui ajoute le caractère "_" à une chaine de caractères, tant que la longueur de la chaine est inférieure à 10
function completerTexte(texte) {
  if (texte) {
    while (texte.length < 10) {
      texte = texte + "_";
    }
  }

  return texte;
}

// Tester différents textes à afficher
afficherTexte(completerTexte("a"));
afficherTexte(completerTexte("azerty"));
afficherTexte(completerTexte("azertyuiop"));

// Ecrire une fonction qui affiche les chiffres de 0 à n
function compter(max) {
  for (var i = 0; i <= max; i++) {
    document.write(i + " ");
  }
  document.write("<br>");
}

// Appeler la fonction "compter"
compter(20);
compter(0);

// Ecrire une fonction qui prend en paramètre une chaine de caractère, et qui vérifie qu'il n'existe pas le caractère "_"
function verifierTexte(texte) {
  var texteCorrect = true;
  if (texte) {
    for (var i = 0; i < texte.length; i++) {
      if (texte[i] === '_') {
        texteCorrect = false;
      }
    }
  } else {
    texteCorrect = false;
  }

  return texteCorrect;
}

// Tester la fonction
afficherTexte(verifierTexte("Ceci est un test de texte"));
afficherTexte(verifierTexte("Ceci_est_un_test_de_texte"));

// Ecrire une fonction qui prend en paramètre un tableau de chaines de caractères et qui vérifient si aucune ne contient le caractère "_"
function verifierTableauTextes(tableau) {
  var tableauCorrect = true;
  if (tableau) {
    for (var i = 0; i < tableau.length; i++) {
      if (!verifierTexte(tableau[i])) {
        tableauCorrect = false;
      }
    }
  } else {
    tableauCorrect = false;
  }

  return tableauCorrect;
}

// Declarer un tableau de texte
var tableau = ["Ceci est un test", "Ceci_est un test",
  "Ceci est un autre test"
];
tableau.push("Ceci est encore un autre test");

// Tester la fonction
afficherTexte(verifierTableauTextes(tableau));
