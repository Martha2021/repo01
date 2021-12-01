$text = " \t\t                 Th a a    fe    wo     🙂   ...  ";
/$binary = "\x09Example string\x0A";
$hello  = "Hello World";
var_dump($text, $binary, $hello);

print "\n";
//utilisation de la methode rtrim()
$trimmed = rtrim($text);
var_dump($trimmed);
print "\n";
$trimmed = rtrim($text, " \t.");
var_dump($trimmed);
print "\n";
$trimmed = rtrim($hello, "Hdle");
var_dump($trimmed);
print "\n";
// enlève les caractères de contrôle ASCII à la fin de $binary
// (de 0 à 31 inclusif)
$clean = rtrim($binary, "\x00..\x1F");
var_dump($clean);

méthode pour la fin de ligne/
echo nl2br("sun \n moon  \n");
$a = 0 ;
$a = ($b=5) +7 ;
echo nl2br(" \n \n $a ");
$a += 4 ;

echo nl2br( " \n 'vaut 16' $a ");
// 16

//$a = $a+4;
$a -= 20;
//$a = $a+4)$a -= 20

echo nl2br( " \n $a ");
