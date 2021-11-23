afficherConsole = function(message) {
    console.log(message);
}

additionner = function(a, b) {
    if (a & b) {
        return a + b;
    } else {
        return 0;
    }
}

afficherConsole("Test de JS");
afficherConsole(additionner(10, 5));