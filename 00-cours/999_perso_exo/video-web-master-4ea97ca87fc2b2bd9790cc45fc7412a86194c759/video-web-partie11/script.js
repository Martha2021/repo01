focusInput = function (input) {
    console.log("FOCUS");
    input.style.background = "grey";
}

blurInput = function (input) {
    console.log("BLUR");
    input.style.background = "white";
}

clavier = function (event) {
    console.log(event.keyCode);
}

envoyerCommentaire = function (event) {
    console.log("Envoi du commentaire");
    event.preventDefault();
    var error = false;
    var nom = document.querySelector('#nom');
    if (nom.value === '') {
        nom.style.borderColor = "red";
        error = true;
    } else {
        nom.style.borderColor = "rgb(238, 238, 238)";
    }
    var dateNaissance = document.querySelector('#dateNaissance');
    if (dateNaissance.value === '') {
        dateNaissance.style.borderColor = "red";
        error = true;
    } else {
        dateNaissance.style.borderColor = "rgb(238, 238, 238)";
    }
    var email = document.querySelector('#email');
    if (email.value === '') {
        email.style.borderColor = "red";
        error = true;
    } else {
        email.style.borderColor = "rgb(238, 238, 238)";
    }
    var commentaire = document.querySelector('#commentaire');
    if (commentaire.value === '') {
        commentaire.style.borderColor = "red";
        error = true;
    } else {
        commentaire.style.borderColor = "rgb(238, 238, 238)";
    }

    if (!error) {
        var commentaires = document.querySelector('#commentaires');
        while (commentaires.firstChild) {
            commentaires.removeChild(commentaires.firstChild);
        }
        var remerciement = document.createElement('h1');
        var titreCommentaire = document.createTextNode("Merci pour votre commentaire");
        remerciement.appendChild(titreCommentaire);
        commentaires.appendChild(remerciement);
    }
}