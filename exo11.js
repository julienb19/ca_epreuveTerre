// récupère les arguments passés en ligne de commande à partir du troisième argument //
const nombre = process.argv.slice(2);
// vérifie si nombre n'est pas un nombre ou s'il est inférieur ou égal à 1 //
if (isNaN(nombre) || nombre[0] <= 1) {
    console.log("Veuillez saisir un nombre valide ! Ce nombre doit être supérieur à 1 !");
} 
// else calcule la racine carrée de nombre //
else {
    const racineCarre = Math.sqrt(nombre);
    // Cette variable sera utilisée pour déterminer si nombre est un nombre premier //
    let estPremier = true;
    // la boucle itère de 2 jusqu'à la racine carrée de nombre inclusivement //
    for (let i = 2; i <= racineCarre; i++) {
        // vérifie si nombre est divisible par i, si le reste de la division est zéro) nombre n'est pas un nombre premier //
        if (racineCarre % i === 0) {
            // estPremier est mise à false //
            estPremier = false;
            // boucle interrompue //
            break;
        }
    }
    // Si estPremier est true, cela signifie que nombre est un nombre premier //
    if (estPremier) {
        console.log("oui" + nombre + " est un nombre premier !");
    } 
    // Si estPremier est false, cela signifie que nombre n'est pas un nombre premier //
    else {
        console.log("non" + nombre + " n' est pas un nombre premier !");
    }
}