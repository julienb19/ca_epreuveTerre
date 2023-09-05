// Cette ligne récupère les arguments passés en ligne de commande à partir du troisième argument et en une chaîne de caractères séparée par des espaces //
const lettre = process.argv.slice(2).join(' ');
// if vérifie si l'argument est manquant //
if (!lettre) {
    console.log("veuillez saisir un mot ou une phrase !");
}
else {
    let lettreInverse = '';
    
    for (let i = lettre.length - 1; i >= 0; i--) {
        lettreInverse += lettre[i];
    }
    
    console.log(lettreInverse);
}