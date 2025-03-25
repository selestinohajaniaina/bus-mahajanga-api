const data = require('../data/bus')

/**
 * read the data of file
 * @returns { BUS{}, STOPS{}, BUS_STOPS{} }
 */
async function read_contenu() {
    try {
        return data;
    } catch (err) {
        // if file has error to read
        console.error('Erreur lors de la lecture du fichier:', err);
        throw err;

    }
  }

module.exports = { read_contenu }