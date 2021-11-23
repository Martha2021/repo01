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
  // <li></li>
  var todoHTML = document.createElement('li');

  // <h3></h3>
  var todoTitreHTML = document.createElement('h3');

  // Titre du todo
  var todoTitreText = document.createTextNode(todo.titre);

  // <h3>Titre du todo</h3>
  todoTitreHTML.appendChild(todoTitreText);

  // <li><h3>Titre du todo</h3></li>
  todoHTML.appendChild(todoTitreHTML);

  // <p></p>
  var todoDescriptionHTML = document.createElement('p');

  // Description du todo
  var todoDescriptionText = document.createTextNode(todo.description);

  // <p>Decription du todo</p>
  todoDescriptionHTML.appendChild(todoDescriptionText);

  // <li><h3>Titre du todo</h3><p>Decription du todo</p></li>
  todoHTML.appendChild(todoDescriptionHTML);

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
