// const nombre1 récupère le troisième arguments passé en ligne de commande //
const nombre1 = process.argv[2];
// const nombre2 récupère le quatrième arguments passé en ligne de commande //
const nombre2 = process.argv[3];
// if vérifie si l'argument n'est pas un nombre //
if (isNaN(nombre1) || isNaN(nombre2)) {
    console.log("veuillez saisir un nombre valide !");
}
// else if vérifie que nombre1 est plus grand que nombre2 et soit des nombre positif //
else if (nombre1 < nombre2 || nombre2 < 1) {
    console.log("erreur");
} 
// else divise nombre1 par nombre2 //
else {
    const resultat = nombre1 / nombre2;
    // else reste est calculer avec l'operateur modulo % //
    const reste = nombre1 % nombre2;
    // affiche le resultat et le reste a la console //
    console.log(resultat);
    console.log(reste);
}




