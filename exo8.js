// récupère le troisième argument de la ligne de commande //

const args = process.argv[2];
// if vérifie si l'argument est manquant //
if (!args) {
  console.log("erreur");
} 
// else if vérifie que l'argument n'est pas un nombre //
else if (!isNaN(args)) {
  console.log("erreur");
} 
// else if vérifie que si plus de 2 arguments sont passés en ligne de commande //
else if (process.argv.length > 3) {
    console.log("erreur");
}
// else donne le nombre d'éléments présents dans le tableau //
else {
  const nombreLettre = args.length;
  console.log(nombreLettre);
}