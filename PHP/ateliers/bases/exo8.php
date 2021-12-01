<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>objet et tableau</title>
    </head>
    <body>
        <?php

//les booleens, la réponse c'est V/F, true or false.
$valeur = true;
$valeur = false;
//la réponse va être sous forme: bool(false)
var_dump($valeur);
echo '<br><br>';
echo '<br><br>';
echo "LES TABLEAUX : array";
// les tableaux
$couleur[0] = "red";
$couleur[1] = "blue";
$couleur[2] = "white";
$couleur[3] = "black";

// presentation du tableau
echo '<pre>';
var_dump($couleur);
echo '</pre>';
//autre présentation de tableau
$bb = array("paris", "marseille", "lille", "bordeaux");
//demande d'afficher un tableau, c'est comme console_log en javascript.
echo '<pre>';
var_dump($bb);
echo '</pre>';

/// a vous de jouer
$txt = "PHP";
echo "I love $txt ! </br> and coding !";
//case sensitive
$color = "rouge";
//concatination : ajouter des chaînes de caractères + une variable + un retour à la ligne.
Echo "<br> Ma voiture est " . $color . "<br>";
echo "<br> Ma maison est " . $color .  "<br>";
echo "<br> Mon bateau est " . $color . "<br>";

// commenter du code dans une variable
$x = 5 /* + 15 */ + 5;
//demande d'afficher :
echo $x;

//typage

$boleen = true;
$txt = "Hello world!";
$x = 5;
$y = 10.5;
$couleur ;

echo '<pre>';
var_dump(  $y, $x,  $txt, $boleen, $couleur);
echo '</pre>';

$voiture = array("VParis", "vmarseille", "v tarn", "vbordeaux");

echo '<pre>';
var_dump($voiture);
echo '</pre>';

//https://www.w3schools.com/php/php_arrays_indexed.asp

$euro = 6.55957;
printf("%.3f FF<br />",$euro);
    ?>
    </body>
</html>