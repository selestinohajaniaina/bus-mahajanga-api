let relations = require('../data/relations');
const nodes = require('../data/nodes');

relations = relations.map( relation => {
    relation.members = relation.members.map(member => findStopByRef(member.ref));
    return relation;
});


/**
 * to find the node by ref in nodes
 * @param {number} ref id of node
 * @returns { Stop } detail of bus'stop
 */
function findStopByRef(ref) {
    return nodes.find(e => e.id === ref);
}


/**
 * list all STOPS in data
 * @returns { Stop[] }
 */
function findStopAll() {
  return nodes.filter(node => node.label != undefined);
}


/**
 * list the stop of bus
 * @param {number} bus_id id of bus ...
 * @returns { Bus }
 */
function findBusDetailById(bus_id) {
  return relations.find(bus => bus.id == bus_id);
}

/**
 * find Bus that have a one stop asked
 * @param {number} stop_id id of stop
 * @returns { Bus[] }
 */
function findBusByOneStop(stop_id) {
    return relations.filter(relation => {
        return relation.members.some(member => member.ref === stop_id);
    });
}


/**
 * find the right bus of trajet giving
 * @param {number} begin STOP_ID - begin of Road
 * @param {number} end STOP_ID - end of Road
 * @returns { Bus[] }
 */
function findBusByTwoStop(begin, end) {
    let firstRelationsFound = findBusByOneStop(begin);
    return firstRelationsFound.filter(relation => {
        return relation.members.some(member => member.ref === end);
    });
}


/**
 * fetch all bus
 * @returns { Bus[] }
 */
function findBusAll() {
    return relations;
}

module.exports = { findStopAll, findBusByOneStop, findBusByTwoStop, findBusDetailById, findBusAll }