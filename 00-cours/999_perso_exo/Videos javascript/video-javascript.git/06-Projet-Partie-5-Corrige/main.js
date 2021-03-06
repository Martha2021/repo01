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
    supprimerTodo(todo.uuid);
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
  requeteHTTPAsync("http://localhost:9090/todos/default/" + titre + "/" +
    description, "POST",
    function(todo,
      error) {
      if (error) {
        console.log("ERREUR : " + error);
      } else {
        if (todo) {
          listeTodos.push(JSON.parse(todo));
          afficherMesTodos();
        }
      }
    });
}

// Récupérer dans deux variables une référence vers les deux éléments de formulaire
var newTodoTitre = document.querySelector("#newTodoTitre");
var newTodoDescription = document.querySelector("#newTodoDescription");

// Déclarer une fonction de callback qui ajoute un nouveau todo contenant les informations saisies par l'utilisateur, et le stocke en local
function actionCreerUnTodo() {
  creerUnTodo(newTodoTitre.value, newTodoDescription.value);
}

// Déclarer une fonction qui supprime un todo de la liste des todos
function supprimerTodo(uuid) {
  requeteHTTPAsync("http://localhost:9090/todos/default/" + uuid, "DELETE",
    function(todo, error) {
      if (error) {
        console.log("ERREUR : " + error);
      } else {
        chargerTodos();
      }
    });
}

// Déclarer une fonction permettant d'exécuter une requête HTTP aynchrone
function requeteHTTPAsync(url, methode, callback) {
  // Construction de la requête
  var xmlHttp = new XMLHttpRequest();

  // Rappel de la fonction de callback lorsque la réponse à été réceptionnée
  xmlHttp.onreadystatechange = function() {
    // readystate : 4 - Le navigateur a reçu une réponse du serveur et l'a traité
    // statuts : 200 - Le serveur a répondu sans erreur
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      callback(xmlHttp.responseText);
    } else {
      if (xmlHttp.readyState == 4 && xmlHttp.status != 200) {
        callback(undefined, xmlHttp.status);
      }
    }
  };
  xmlHttp.open(methode, url, true);
  xmlHttp.send(null);
}

// Déclarer une fonction qui charge une todo liste depuis le serveur
function chargerTodos() {
  requeteHTTPAsync("http://localhost:9090/todos/default", "GET", function(todos,
    error) {
    if (error) {
      console.log("ERREUR : " + error);
    } else {
      if (todos) {
        listeTodos = JSON.parse(todos);
        afficherMesTodos();
      }
    }
  });
}

// Charger la liste des todos
chargerTodos();
