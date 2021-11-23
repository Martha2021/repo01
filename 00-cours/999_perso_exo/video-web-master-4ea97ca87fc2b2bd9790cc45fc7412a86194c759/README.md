# Développement web

## Présentation et historique
- Le développement web est divisé en deux parties : le côté client et le côté serveur

### Côté client
- Première version d'HTML au début des années 1990
- Netscape est sortie en 1994, de même que CSS
- Les applets Java font leur apparition en 1996 pour ajouter du dynamisme aux pages web
- Javascript apparait également en 1996
- La première version de flash sort également en 1996
- HTML4 sort en 1997, de même que CSS2
- Javascript, Java Applet, Flash et .Net évoluent régulièrement
- Des navigateurs comme Safari, Opéra, Firefox et Chrome apparaissent de manière régulière
- D'autres technologies comme Silverlight, ou ActiveX apparaissent également pour dynamiser les pages web
- En 2009, le web entame sa révolution avec HTML5, CSS3 : animations, vidéos, audio, glisser-déposer, webworkers
- D'autres frameworks suivent cette révolution : jQuery, AngularJS, Angular, Ember, etc.
- Le web attaque également les mobiles grâce à des projets comme Cordova/PhoneGap
- Le site `http://www.evolutionoftheweb.com/` offre un bel aperçu de cette évolution

### Côté serveur
- A l'origine des serveurs très simples (CGI) : C, C++, perl, etc.
- Des langages dédiés apparaissent : PHP, ASP, JEE, etc.
- Aujourd'hui, des langages modernes prennent le relais : Go, NodeJS, Python

## Grand principe du développement web
- Le serveur calcul, interroge la BDD, assure la sécurité
- Le client se content de rendre l'information et d'offrir une interface ergonomique
- On ne peut pas faire confiance au client
- Les clients web ont des capacités limitées
- Il existe un très grand nombre de configuration
- Le but est donc d'offrir une expérience ergonomique (proche des clients lourds), la plus légère possible (bande passante, CPU, GPU), la plus compatible possible (responsive, bureau, mobile) et la plus sûre possible

## Cas d'usage de développement web
- Blog : `https://blog.golang.org/`
- Boutiques en ligne : `https://www.amazon.fr`
- Jeux
- Services publics
- Applications mobiles : `http://showcase.ionicframework.com/apps/top`
- Outils : `http://www.color-hex.com/`

## Présentation du langage HTML
- HTML : Hyper Text Language Markup
- S'appuie sur un système de balises et de conteneurs
- Défini les éléments par leur fonction : titre, paragraphe, tableau, bouton, formulaire
- Langage intérmédiaire rendu par le navigateur
- Organisé autour d'une norme que s'engage à respecter l'ensemble des navigateurs

## Présentation du langage CSS
- CSS : Cascading Style Sheets
- Mise en forme des éléments HTML
- Peut être externalisé dans des fichiers CSS (donc réutilisables)
- Le HTML décrit le contenu, le CSS le met en forme
- Le CSS repose sur des règles (couleur, police, taille), des sélecteurs (balise, identifiant, nom) et des valeurs (px, couleur hexadecimal)
- Les règles s'appliquent en cascade et s'additionnent
- En cas de conflit, la règle CSS la plus proche de l'élément s'applique

## Présentation du langage Javascript
- Javascript est un langage exécuté dans le navigateur
- Il permet de dynamiser les pages web
- HTML : contenu, CSS : mise en forme, JS : comportement
- Permet de réagir à des évènements : clics de souris, appuie sur une touche du clavier, etc.
- Permet de manipuler la page : modifier le style, le contenu, l'arbre DOM
- Permet d'interagir avec un serveur : envoyer une requête HTTP, gérer des WS
- Plusieurs spécications existent (ES5, ES6, bientôt ES7, etc.)