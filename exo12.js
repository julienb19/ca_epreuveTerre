// récupère le troisième argument passé en ligne de commande //
const heure24 = process.argv[2];
// if vérifie si heure24 est vide ou si la longueur de la chaîne divisée par ':' n'est pas égale à 2 //
if (!heure24 || heure24.split(':').length!==2) {
    console.log("veuillez saisir une heure au format (hh:mm)");
} 
else {
    // divise la chaîne heure24 en deux parties, heure et minute, en utilisant ':' comme séparateur //
    const [heure, minute] = heure24.split(':');
    // déclarent les variables heure12 et suffixe //
    let heure12;
    let suffixe;
    // if vérifie si l'heure est minuit ("00") ou midi ("12") puis assignent des valeurs spécifiques à heure12 et suffixe //
    if (heure === "00"){
        heure12 = "00";
        suffixe = "am";
    } if ( heure === "12"){
        heure12 = "12";
        suffixe = "pm";
    }
    // if vérifie si l'heure est inférieure à 12 //
    if (parseInt(heure) < 12){
        // Cette ligne supprime les zéros initiaux de la variable //
        heure12 = heure.replace(/^0+/,"");
        suffixe = "am";
    } else {
        //  convertit l'heure en format 12 heures en soustrayant 12 à la valeur de heure //
        heure12 = ((parseInt(heure) - 12).toString());
        suffixe = "pm";
    }
    // Ces étapes permettent de convertir l'heure au format 24 heures en une heure au format 12 heures avec le suffixe "am" ou "pm" //
    const heure12Formattee = heure12 + ':' + minute + suffixe;
// affiche l'heure au format 12 heure //
console.log(heure12Formattee);

}