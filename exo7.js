// Cette ligne récupère les arguments passés en ligne de commande à partir du troisième argument et en une chaîne de caractères séparée par des espaces //
const lettre = process.argv.slice(2).join(' ');
// if vérifie si l'argument est manquant //
if (!lettre) {
    console.log("veuillez saisir un mot ou une phrase !");
} 
// else divise la chaîne lettre en un tableau, inverse l'ordre des éléments du tableau puis rejoint les éléments du tableau en une seule chaîne de caractères //
else {

const lettreInverse = lettre.split('').reverse().join('');
     // affiche l' inverse de la chaine de caractère //
    console.log(lettreInverse);
}

