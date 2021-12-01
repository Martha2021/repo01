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
  //afficher sauts de ligne : \n, écrire dans une ligne.
  echo n12br("paris \n bordeaux \n marseille");

  echo nl2br("sun \n moon \n moon1 \n moon2");
echo nl2br("paris \n bordeaux \n marseille");

  ?>

</body>
</html>