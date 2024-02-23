const fs = require('fs');

fs.access('./myFolfer', (err) => {
    if (err) {
        // Le dossier n'existe pas, donc on le crée
        fs.mkdir('./myFolfer', (err) => {
            if (err) {
                console.log(`Erreur lors de la création du dossier : ${err}`);
            } else {
                console.log('Dossier créé avec succès');
            }
        });
    } else {
        // Le dossier existe déjà, donc on le supprime
        fs.rmdir('./myFolfer', (err) => {
            if (err) {
                console.log(`Erreur lors de la suppression du dossier : ${err}`);
            } else {
                console.log('Dossier supprimé avec succès');
            }
        });
    }
});