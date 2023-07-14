// const number prend le troisième argument passé en ligne de commande //

const number = process.argv[2];

// if vérifie d'abord si l'argument est manquant ou  si ce n'est pas un nombre //

if (!number || isNaN(number)) {
    console.log("veuillez saisir un nombre entier !");
} 
// else if vérifie si le nombre est pair en utilisant l'opérateur modulo % //

else if (number % 2 === 0) {
    // affiche le nombre est pair //
    console.log(number + " est pair !");
} 
else {
    // sinon affiche le nombre est impair //
    console.log(number + " est impair !");
}