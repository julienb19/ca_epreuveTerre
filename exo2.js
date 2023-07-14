// const path fournit des utilitaires pour travailler avec les chemins de fichier et répertoire //

const path = require ("path");

// const stringName est utilisée pour extrère le nom du fichier //

const stringName = path.basename(__filename);

// affiche le nom du fichier //

console.log(stringName);

