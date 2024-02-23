const fs = require('fs');

fs.access('./monDossier', (err) => {
    if (err) {
        // Le dossier n'existe pas, donc on le crée
        fs.mkdir('./monDossier', (err) => {
            if (err) {
                console.log(`Erreur lors de la création du dossier : ${err}`);
            } else {
                console.log('Dossier créé avec succès');
            }
        });
    } else {
        // Le dossier existe déjà, donc on le supprime
        fs.rmdir('./monDossier', (err) => {
            if (err) {
                console.log(`Erreur lors de la suppression du dossier : ${err}`);
            } else {
                console.log('Dossier supprimé avec succès');
            }
        });
    }
});