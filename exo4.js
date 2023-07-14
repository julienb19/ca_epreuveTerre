// const lettre récupère le troisième argument passé en ligne de commande //

const lettre = process.argv[2];

// let alphabet initialise une variable alphabet avec une chaîne de caractères vide. Cette variable sera utilisée pour construire l'alphabet //

let alphabet = "";

// const lettreMin convertit la lettre spécifiée en minuscule //

const lettreMin = lettre.toLowerCase();

// Cette boucle commence à l'indice correspondant à la lettre spécifiée et se poursuit jusqu'à l'indice de la lettre "z". Elle itère sur chaque lettre à l'intérieur de la boucle //

for (i = lettreMin.charCodeAt(); i <= "z".charCodeAt(); i++) {

    // cette ligne ajoute le caractère correspondant à la variable alphabet //

    alphabet += String.fromCharCode(i);
}
// affiche à la console //

console.log(alphabet);
