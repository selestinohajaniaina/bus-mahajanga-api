const { BUS, BUS_STOPS } = require('../data/bus.js');

/**
 * find the right bus of trajet giving
 * @param {string} begin STOP_ID - begin of Road
 * @param {string} end STOP_ID - end of Road
 * @returns {Number[]}
 */
function getBus(begin, end) {

    let bus = [];

    // format object STOPS to { BUS_ID: string, ROAD: string[] }
    Object.entries(BUS_STOPS).map((e)=> bus.push({BUS_ID: e[0], ROAD: e[1]}))
    
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
             * [else condition]: Verify if the index of begin is more than end
             */
            if(beginPosition < endPosition) {

                // slice the array ROAD in beginPosition and endPosition
                trajet = item.ROAD.slice(beginPosition, endPosition + 1);
                cible.push({BUS_ID: item.BUS_ID, ROAD: trajet});

            } else if (beginPosition > endPosition) {

                // revese the slice of ROAD array
                trajet = item.ROAD.slice(endPosition, beginPosition + 1).reverse();
                cible.push({BUS_ID: item.BUS_ID, ROAD: trajet});
            }

        }

    }

    return cible;
}

/**
 * fetch all bus
 * @returns { BUS{} }
 */
function getAllBus() {

    return BUS;
}

module.exports = { getBus, getAllBus }