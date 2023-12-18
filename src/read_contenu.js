const { readFile } = require('fs').promises;

// declarer un fonction asyncronisee pour lire un fichier
async function read_contenu() {

    try {

        // lire le fichier bus.js, et assigner a unn variable le contenu
        const data = await readFile('src/bus.json', 'utf8');
        // charger en tant que JSON le contenue
        const jsonData = JSON.parse(data);
        // retourner a la fonction l'objet obtenus
        return jsonData.data;

    } catch (err) {

        // signaler s'il y une errerur
        console.error('Erreur lors de la lecture du fichier:', err);
        throw err;

    }
  }

module.exports = { read_contenu }