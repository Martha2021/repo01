<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> <?php echo "<p> PHP généré par le module php dans apache </p>"; ?> </title>
    
</head>
<body>
<?php

//on affiche des chaines de caracteres
    echo 'bonjour<br><BR>';
    echo "tonton<br><BR>";
    echo ("hjkjklkdlj<BR><BR>");
    echo '<br>1234565434567 ceci est une chaine de caractère </BR><BR>';

// on affiche un entier
echo 10 .'</br>' ;

//concaténation
  $a = 33-3 .' ceci est un entier <BR><BR>';
  $b = 'chaine de caractères <BR> <BR>' ;
  $c = 33-3 ." ceci est un entier <BR><BR>";

//affichage les variables
  echo $a ;
  echo '<br>' ;
  echo $b, $a, $c ;

 /*methode pour commenter plusieurs ligne :/*---2 fois :  echo nl2br("sun \n moon \n moon1 \n moon2");
  echo "<br><br>";
echo nl2br("paris \n bordeaux \n marseille");*/
echo "<br><br>";


echo nl2br("Voici les principales villes de France \n paris \n bordeaux \n marseille");
// Méthode saut de ligne , pour une ligne : il faut taper : //
echo "<br><br>";
echo nl2br("Voici les principales villes de France \t paris \t bordeaux \t marseille");


  echo nl2br("sun \n moon \n moon1 \n moon2");
  echo "<br><br>";
  /*
echo nl2br("paris \n bordeaux \n marseille");
echo "<br><br>";

echo nl2br("Voici les principales villes de France \n paris \n bordeaux \n marseille");
echo "<br><br>";
echo "<br><br>";
echo nl2br("Voici les principales villes de France \t paris \t bordeaux \t marseille");*/
  
  $a = 13;  
  $b = 3;
  $c = 4;
  $d = 5;
  $e = 6;
  $f = 10;

 echo $a;
 echo ('<br>');
 echo ('<br>');
 echo ('<br>');
 echo $b;
 echo ('<br>');
 echo $c;
 echo ('<br>');
 echo $d;
 echo ('<br>');
 echo $e;
 echo ('<br>');
 echo $f;
 echo ('<br>');
 echo ('<br>');
 echo ('<br>');
 echo ('<br>');
 echo ('<br>');
 echo $a + $b;
 echo ('<br>');
 echo ('<br>');
 echo $a - $b;
 echo ('<br>');
 echo ('<br>');
 echo $a / $b;
 echo ('<br>');
 echo ('<br>');
 echo $a % $b;
 echo ('<br>');
 echo ('<br>');
 echo $a + $b + $c + $d + $d + $e;
 echo ('<br>');
 echo ('<br>');
$g = "manteaux";
echo $g . " en promotion !";

$saison = "l'hiver";

echo ('<br>');
 echo ('<br>');

 $a = 0 : $a vaut 0
 $a = ($b=5) +7 : $a vaut 12 (5+7)
 $a += 4 : $a vaut 16 (équivalent à $a = $a+4)$a -= 20 : $a vaut -4 $a = $a-20`)
 
  ?>

</body>
</html>
