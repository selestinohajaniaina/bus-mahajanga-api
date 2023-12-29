const { datao } = require('./bus.js')

// declarer un fonction asyncronisee pour lire un fichier
async function read_contenu() {

    try {

        // retourner la variable datao qui contien tous les donnees
        return datao;

    } catch (err) {

        // signaler s'il y une errerur
        console.error('Erreur lors de la lecture du fichier:', err);
        throw err;

    }
  }

module.exports = { read_contenu }