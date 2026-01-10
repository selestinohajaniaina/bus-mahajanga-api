const relations = require('../data/relations');

/**
 * find the right bus of trajet giving
 * @param {number} begin STOP_ID - begin of Road
 * @param {number} end STOP_ID - end of Road
 * @returns {relations[]}
 */
function getBus(begin, end) {
    return relations.filter(relation => {
        const members = relation.members;
        const hasBegin = members.some(m => m.type === 'node' && m.ref === begin);
        const hasEnd = members.some(m => m.type === 'node' && m.ref === end);
        return hasBegin && hasEnd;
    });
}


/**
 * fetch all bus
 * @returns { relations[] }
 */
function getAllBus() {
    return relations;
}

/**
 * fetch the description of bus
 * @param {number} busId reference of bus
 * @returns description of bus
 */
function busAt(busId) {
    return relations.find(bus => bus.id == busId);
}

module.exports = { getBus, getAllBus, busAt }