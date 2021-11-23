// Déclarer un tableau listeTodos qui contient deux objets todo
var listeTodos = [{
  "titre": "Premier todo",
  "description": "Un premier todo et sa description"
}, {
  "titre": "Deuxième todo",
  "description": "Un deuxième todo et sa description"
}];

// Déclarer une fonction qui injecte un élement todo dans le document HTML
function creerTodoHTML(todo) {

}

// Déclarer une fonction qui vide un élément HTML de ses enfants
function viderElementHTML(elementHTML) {

}

// Déclarer une fonction qui affiche une liste de todos dans le document HTML
function afficherMesTodos() {

}

// Déclarer une fonction qui crée un objet todo et l'ajoute à la liste de todos
function creerUnTodo(titre, description) {
  var todo = {
    "titre": titre,
    "description": description
  };
  listeTodos.push(todo);
}

// Récupérer dans deux variables une référence vers les deux éléments de formulaire
var newTodoTitre = document.querySelector("#newTodoTitre");
var newTodoDescription = document.querySelector("#newTodoDescription");

// Déclarer une fonction de callback qui ajoute un nouveau todo contenant les informations saisies par l'utilisateur
function actionCreerUnTodo() {
  creerUnTodo(newTodoTitre.value, newTodoDescription.value);
  afficherMesTodos();
}

// Afficher la liste des todos au chargement de la page
afficherMesTodos();
