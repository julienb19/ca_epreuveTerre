// const args est un tableau qui contient les arguments passés lors de l'exécution du script //

const args = process.argv.slice(2);

// Cette boucle itère sur les éléments du tableau args en utilisant l'index i comme compteur //

for (i = 0; i < args.length; i++) {
    // affiche les arguments //
    console.log(args[i]);
}