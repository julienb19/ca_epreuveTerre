// récupère les arguments passés en ligne de commande à partir du troisième argument //

const nombre = process.argv.slice(2);

// if vérifie si les arguments sont bien des nombre //
if (isNaN(nombre[0]) || isNaN(nombre[1])) {
    console.log("veuillez sasir un nombre valide");
} 
// else if vérifie que les nombre soit positif //
else if (nombre[0] < 0 || nombre[1] < 0) {
    console.log("veuillez saisir un chiffre positif");
} 
// else la base = argument[3] puissance exposant = argument[4] //
else {
    const base = nombre[0];
    const exposant = nombre[1];
    const resultat = base ** exposant;
    // affiche le resultat d'une puissance //
    console.log(resultat);
}