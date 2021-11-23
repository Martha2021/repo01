focusInput = function(input) {
    console.log("FOCUS");
    input.style.background = "grey";
}

blurInput = function(input) {
    console.log("BLUR");
    input.style.background = "white";
}

clavier = function(event) {
    console.log(event.keyCode);
}

envoyerCommentaire = function(event) {
    console.log("Envoi du commentaire");
    event.preventDefault();
}