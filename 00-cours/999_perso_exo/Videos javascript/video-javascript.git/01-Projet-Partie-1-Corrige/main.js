// Déclarer un tableau listeTodos qui contient deux objets todo
var listeTodos = [{
  "titre": "Premier todo",
  "description": "Un premier todo et sa description"
}, {
  "titre": "Deuxième todo",
  "description": "Un deuxième todo et sa description"
}];

// Déclarer une fonction qui affiche un todo dans le document HTML
function afficherUnTodo(todo) {
  document.write('<b>' + todo.titre + '</b> ');
  document.write(todo.description);
  document.write('<br />');
}

// Déclarer une fonction qui affiche une liste de todos dans le document HTML
function afficherMesTodos() {
  listeTodos.forEach(function(todo) {
    afficherUnTodo(todo);
  });
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
