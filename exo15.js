// const number prend le troisième argument passé en ligne de commande //
const numbers = process.argv.slice(2);
// if vérifie si la liste d'entiers est vide ou si tous les éléments de la liste sont des nombres //
if (numbers.length === 0 || !numbers.every(num => !isNaN(num))) {
    console.log("Erreur : veuillez fournir une liste valide d'entiers.");
  } else {
    // isSorted à true pour indiquer que la liste est triée jusqu'à présent//
    let isSorted = true;
    // for pour comparer chaque nombre avec son prédécesseur dans la liste //
    for (let i = 1; i < numbers.length; i++) {
      if (parseInt(numbers[i]) < parseInt(numbers[i - 1])) {
        //si un nombre qui est inférieur à son prédécesseur, cela signifie que la liste n'est pas triée alors false //
        isSorted = false;
        break;
      }
    }
    // if isSorted est true, cela signifie que tous les nombres sont triés dans l'ordre croissant //
    if (isSorted) {
      console.log("Triée !");
    // else isSorted est false,  cela signifie qu'au moins un nombre est hors de l'ordre //
    } else {
      console.log("Pas triée !");
    }
}
