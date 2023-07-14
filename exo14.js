// récupère les arguments passés en ligne de commande à partir du troisième argument //
const nombreMilieu = process.argv.slice(2);

/* Ces lignes convertissent les éléments du tableau nombreMilieu en entiers en utilisant parseInt().
 Les entiers correspondants sont assignés aux variables a, b et c */

const a = parseInt(nombreMilieu[0]);
const b = parseInt(nombreMilieu[1]);
const c = parseInt(nombreMilieu[2]);

// if, else if comparent les valeurs de a, b et c pour déterminer le nombre du milieu //

if ((b < a && a < c) || (c < a && a < b)) {
    console.log(a);
} else if ((a < b && b < c) || (c < b && b < a)) {
    console.log(b);
} 
else if ((a < c && c < b) || (b < c && c < a)) {
    console.log(c);
} 
// Si aucune des conditions précédentes n'est vraie le programme affiche alors le message "erreur" //
else {
    console.log("erreur");
}
