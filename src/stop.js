const { read_contenu } = require('./read_contenu.js')

// declarer un fonction asyncromme pour avoir tous les listes des arrets
/**
 * declarer un fonction asyncromme pour avoir tous les listes des arrets
 * @returns
 */
async function getAllStop() {

    // assigner a un variable les contenus du function read_contenu()
    const bus_contenu = await read_contenu();

    // initialiser une tableau vide pour lister les arrets de chaque BUS
    let stopArray = [];

    // initialiser une autre tableau pour stoquer les arrets en eliminant le repetitive
    let stop = [];

    // parcourir le bus_contenu
    bus_contenu.map((e) => {
        // ajouter au stopArray la valeur du "stop" du bus_contenu
      stopArray.push(e['stop']);
    })

    // parcourir le contenus (listes) du stopArray
    stopArray.map((e) => {

        // parcourir le tableau integree de chaque liste du contenu de stopArray
      e.map((stp) => {
        // ajouter a la tableau stop un contenus s'il n'existe pas deja
        if(!stop.includes(stp)){
          stop.push(stp);
        }
      })

    })

    // retourner a la fonction tout le contenus du stop
    return stop;

  }

// declarer un fonctiom pour avoir une liste des arrets d'une bus
async function getStop(bus_id) {

  // assigner a un variable les contenus du function read_contenu()
  const bus_contenu = await read_contenu();

  // parcourir le contenus du bus_contenu
  for(let bus in bus_contenu) {

    // si bus_id==id (du contenue)
    if(bus_contenu[bus]['id'] == bus_id) {
      // retourne au fonction ses arrets 
      return bus_contenu[bus]['stop'];
    }

  }
}

module.exports = { getAllStop, getStop }