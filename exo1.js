// c'est dans cette variable que je vais construire l'alphabet //

let alphabet = "";

// ma boucle for itére les caractères de la lettre 'a' à 'z' puis ajoute chaque itération a ma variable alphabet // 

for (i = 'A'.charCodeAt(); i <= 'Z'.charCodeAt(); i++) {
    alphabet += String.fromCharCode(i).toLowerCase();
}

// affiche la chaine alphabet dans la console //

console.log(alphabet);