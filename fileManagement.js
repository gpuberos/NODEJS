// Importation du module 'fs' (file system) de Node.js
const fs = require('fs');

// Vérification de l'existence du dossier './myFolfer' (test des permissions du répertoire)
fs.access('./myFolfer', (err) => {
    // Si une erreur se produit, cela signifie que le dossier n'existe pas
    if (err) {
        // Création du dossier './myFolfer' de manière asynchrone
        fs.mkdir('./myFolfer', (err) => {
            // Si une erreur se produit lors de la création du dossier
            if (err) {
                console.log(`Erreur lors de la création du dossier : ${err}`);
            } else {
                // Si le dossier est créé avec succès
                console.log('Dossier créé avec succès');
            }
        });
    } else {
        // Si le dossier existe déjà, suppression du dossier './myFolfer' de manière asynchrone
        fs.rmdir('./myFolfer', (err) => {
            // Si une erreur se produit lors de la suppression du dossier
            if (err) {
                console.log(`Erreur lors de la suppression du dossier : ${err}`);
            } else {
                // Si le dossier est supprimé avec succès
                console.log('Dossier supprimé avec succès');
            }
        });
    }
});