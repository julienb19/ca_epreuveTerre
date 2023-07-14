// récupère l' argument trois en ligne de commande //
const nombre = process.argv[2];
// if vérifie si nombre n'est pas un entier et si nombre est inférieur a zéro //
if (!Number.isInteger(nombre) || nombre < 0) {
    console.log(" veuillez saisir un entier positif ! ");
  }
// else calcule la racine carrée de nombre //
else {
const racineCarre = Math.sqrt(nombre);
// effiche la racine carrée de nombre //
console.log(racineCarre);
}