const { read_contenu } = require('./read_contenu.js')

// declarer une fonction pour avoir le bon bus a prendre: d=debut && f=fin [arret]
async function getBus(d, f) {

    try {
      
        // assigner a un variable les contenus du function read_contenu()
        const bus_contenu = await read_contenu();
        // initialiser une tableau vide pour stoquer les trajets correspondant
        let cible = [];
  
        // parcourir la sequence du tableau bus_contenu
        for(let i in bus_contenu) {

            // si d et f sont incluent dans 'stop' de i parcourue
            if(bus_contenu[i]['stop'].includes(d) && bus_contenu[i]['stop'].includes(f)) {

                // A et B sont l'index du d et f (debut et fin)
                let A = bus_contenu[i]['stop'].indexOf(d);
                let B = bus_contenu[i]['stop'].indexOf(f);
                // trj est une liste de segment entre A : B
                let trj = bus_contenu[i]['stop'].slice(A , B + 1);
    
                // si A > B 
                if(A > B) {
                    // inverser le segment 
                    trj = bus_contenu[i]['stop'].slice(B, A + 1);
                    trj.reverse();
                }

                // et ajouter tableau au cible cette sequence si d et i inclue dans i['stop'] est vrai
                cible.push({
                    "BUS_ID": bus_contenu[i]['id'],
                    "BUS_NAME": bus_contenu[i]['name'],
                    "BUS_PLAQUE": bus_contenu[i]['plaque'],
                    "YOUR_TRAJET": trj,
                    "TIME": "pas definie",
                    "LONG": "pas definie"
                })
            }
  
        }
  
        // retourner au fonction la valeur de cible 
        return cible;
  
    } catch (error) {

        // signaler s'il y a une erreur
        console.error('Une erreur s\'est produite:', error);

    }

}

// declarer une fonction pour avoir tous les bus disponnible
async function getAllBus() {

    // assigner a un variable les contenus du function read_contenu()
    const bus_contenu = await read_contenu();
    // initialiser une tableau vide pour stoquer les bus 
    let allBus = [];
  
    // parcourir le contenus du bus_contenu
    bus_contenu.map((e) => allBus.push({
        "BUS_ID": e['id'],
        "BUS_NAME": e['name'],
    }))

    // retourner au fonction la valeur du allBus
    return allBus;
}

module.exports = { getBus, getAllBus }