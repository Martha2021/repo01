<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php 
    // Opérateurs de comparaison
    // var_dump affiche les informations structurées d'une variable
    // Renvoi une valeur boléenne, true = vrai, false = faux
    var_dump(0 == "a"); echo "<br>";
    var_dump("1" == "01"); echo "<br>";
    var_dump("10" == "1e1"); echo "<br>";
    var_dump(100 == "1e2"); echo "<br>";
    var_dump(100 == 100); echo "<br>";
    var_dump(100 < 50); echo "<br>";
    var_dump(100 == "1e2a"); echo "<br>";
    echo ("<br><br>");
    $bonjour = "Bonjour le monde";
    echo "<b>$bonjour</b>";
    echo ("<br><br>");
$nom = "leroy";
$prenom = "pierre";
$age = 44;

if ($age >= 18 ){

    echo ("pierre est majeur, il peut voter en avril 2022.");
}

else
{
    echo ("pierre est mineur, il doit attendre pour voter.");
}

$age = 21;

if ($age>=18);

{
    $reponse = "majeur";
}
elseif
{
    $reponse = "mineur";
}


   ?>

</body>
</html>