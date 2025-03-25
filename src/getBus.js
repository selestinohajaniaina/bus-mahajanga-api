const { read_contenu } = require('./read_contenu.js')

/**
 * find the right bus of trajet giving
 * @param {string} d STOP_ID - begin of Road
 * @param {string} f STOP_ID - end of Road
 * @returns {Number[]}
 */
async function getBus(begin, end) {

    // get the data from data loaded
    const bus_contenu = await read_contenu();

    let bus = [];

    // format object STOPS to { BUS_ID: string, ROAD: string[] }
    Object.entries(bus_contenu.BUS_STOPS).map((e)=> bus.push({BUS_ID: e[0], ROAD: e[1]}))
    
    let cible = [];

    for(let item of bus) {
        
        let trajet = [];

        if(item.ROAD.includes(begin) && item.ROAD.includes(end) ) {
            /**
             * beginPosition : position of begin road (BUS_ID)
             * endPosition : position of end road (BUS_ID)
             */
            let beginPosition = item.ROAD.indexOf(begin);
            let endPosition = item.ROAD.indexOf(end);

            /**
             * cut the road just interval of trajet
             * [condition]: Verify if the index of begin is less than end
             * [condition true]: slice the array ROAD in beginPosition and endPosition
             * [condition false]: revese the slice of ROAD array
             */
            trajet = beginPosition < endPosition ? item.ROAD.slice(beginPosition, endPosition + 1) : item.ROAD.slice(endPosition, beginPosition + 1).reverse();

            cible.push({BUS_ID: item.BUS_ID, ROAD: trajet});
        }

    }

    return cible;
}

/**
 * fetch all bus
 * @returns { BUS{} }
 */
async function getAllBus() {

    // get the data from data loaded
    const bus_contenu = await read_contenu();

    return bus_contenu.BUS;
}

module.exports = { getBus, getAllBus }