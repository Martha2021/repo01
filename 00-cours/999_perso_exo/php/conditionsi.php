
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
/* exemple 1 */
$heure_connexion = 17;
if($heure_connexion<18){
    echo "passez une bonne journee";
    /*variable journée = $journee */
    $journee" = "oui";
    
    else{
        echo "passez une bonne soirée";
        $journee = "non";
    }
    echo 'Fait-il jour? La réponse est '.$journee.'.';

?>

</body>
</html>