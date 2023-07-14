// récupère le troisième argument passé en ligne de commande //
const heure12 = process.argv[2];
//  if vérifie si heure12 est vide ou si la longueur de la chaîne divisée par ':' n'est pas égale à 2 //
if (!heure12 || heure12.split(':').length !== 2) {
    console.log("Veuillez saisir une heure au format 12h AM/PM ");
} 
else {
    // divise la chaîne heure24 en deux parties, heure et minute, en utilisant ':' comme séparateur //
    const [heure, minuteAMPM] = heure12.split(':');
    // Cette ligne extrait les deux premiers caractères de minuteAMPM //
    const minute = minuteAMPM.slice(0, 2);
    // cette ligne extrait les caractères restants de minuteAMPM à partir de l'indice 2 puis converti ces caractères en majuscules //
    const ampm = minuteAMPM.slice(2).toUpperCase();
    // Cette ligne déclare une variable //
    let heure24;
    // if vérifie si 12 est AM alors il est minuit (00:00) //
    if (heure === "12" && ampm === "AM") {
        heure24 = "00";
    } 
    // else if vérifie si 12 est PM alors il est midi (12:00) //    
    else if (heure === "12" && ampm === "PM") {
        heure24 = "12";
    } 
    // else if ampm est "AM" (autre que minuit), heure24 est assignée à heure en utilisant padStart(2, '0') pour garantir qu'elle soit au format "hh" avec un zéro de remplissage si nécessaire //    
    else if (ampm === "AM") {
        heure24 = heure.padStart(2, '0');
    } 
    //  else if  Si ampm est "PM" (autre que midi), heure24 est assignée à heure convertie en entier et augmentée de 12, puis convertie en chaîne de caractères avec toString() Ensuite, padStart(2, '0') est utilisé pour garantir que heure24 est au format "hh" avec un zéro de remplissage si nécessaire //
    else if (ampm === "PM") {
        heure24 = (parseInt(heure, 10) + 12).toString().padStart(2, '0');
    } 
    // Si aucune des conditions précédentes n'est vraie, cela signifie que l'heure est saisie dans un format incorrect //
    else {
        console.log("Veuillez saisir une heure au format (00:00AM)");
        return;
    }
    // Cette ligne concatène les valeurs de heure24, ":", et minute pour former une chaîne au format "hh:mm" //
    const heure24Formattee = heure24 + ':' + minute;
    // affiche l'heure au format 24h //
    console.log(heure24Formattee);
}