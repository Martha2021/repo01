// Déclarer un tableau listeTodos qui ne contient aucun todo
var listeTodos = [];

// Déclarer une fonction qui injecte un élement todo dans le document HTML
function creerTodoHTML(todo) {
  var todoHTML = document.createElement('li');

  var todoTitreHTML = document.createElement('h3');
  var todoTitreText = document.createTextNode(todo.titre);
  todoTitreHTML.appendChild(todoTitreText);
  todoHTML.appendChild(todoTitreHTML);

  var todoDescriptionHTML = document.createElement('p');
  var todoDescriptionText = document.createTextNode(todo.description);
  todoDescriptionHTML.appendChild(todoDescriptionText);
  todoHTML.appendChild(todoDescriptionHTML);

  // <button></button>
  var todoRemoveHTML = document.createElement('button');

  // <button>Supprimer</button>
  var todoRemoveText = document.createTextNode('Supprimer');
  todoRemoveHTML.appendChild(todoRemoveText);

  todoRemoveHTML.onclick = function() {
    supprimerTodo(todo.titre);
    afficherMesTodos();
  };
  todoHTML.appendChild(todoRemoveHTML);

  return todoHTML;
}

// Déclarer une fonction qui vide un élément HTML de ses enfants
function viderElementHTML(elementHTML) {
  while (elementHTML.firstChild) {
    elementHTML.removeChild(elementHTML.firstChild);
  }
}

// Déclarer une fonction qui affiche une liste de todos dans le document HTML
function afficherMesTodos() {
  var mesTodosHTML = document.querySelector('#mesTodos');
  viderElementHTML(mesTodosHTML);

  listeTodos.forEach(function(todo) {
    var todoHTML = creerTodoHTML(todo);
    mesTodosHTML.appendChild(todoHTML);
  });
}

// Déclarer une fonction qui affiche une liste de todos dans le document HTML
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

// Déclarer une fonction de callback qui ajoute un nouveau todo contenant les informations saisies par l'utilisateur, et le stocke en local
function actionCreerUnTodo() {
  creerUnTodo(newTodoTitre.value, newTodoDescription.value);
  stockerTodos();
  afficherMesTodos();
}

// Déclarer une fonction qui supprime un todo de la liste des todos
function supprimerTodo(titre) {
  var deletedTodos = [];

  listeTodos.forEach(function(todo) {
    if (todo.titre !== titre) {
      deletedTodos.push(todo);
    }
  });

  listeTodos = deletedTodos;
}

// Déclarer une fonction qui enregistre une todo liste dans l'espace de stockage local
function stockerTodos() {
  localStorage.setItem("todos", JSON.stringify(listeTodos));
}

// Déclarer une fonction qui charge une todo liste depuis l'espace de stockage local
function chargerTodos() {
  var todosStockes = localStorage.getItem("todos");
  if (todosStockes) {
    listeTodos = JSON.parse(todosStockes);
  }
}

// Déclarer une fonction qui nettoie l'espace de stockage local, et supprime tous les todos de la todoliste
function reinitialiserStockageTodos() {
  localStorage.clear();
  listeTodos = [];
  afficherMesTodos();
}

// Charger la liste des todos
chargerTodos();
// Afficher la liste des todos
afficherMesTodos();
