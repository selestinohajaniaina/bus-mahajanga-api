const relations = require('../data/relations');
const nodes = require('../data/nodes');

function findNodeByRef(ref) {
    return nodes.find(e => e.id === ref);
}

/**
 * list all STOPS in data
 * @returns { [] }
 */
function getAllStop() {

  let stops = [];

  relations.map(relation => {
    relation.members.forEach(member => {
      if (member.type === 'node') {
        let memberExits = stops.find(stop => stop.id === member.ref);
        if (!memberExits) {
          let node = findNodeByRef(member.ref);
          // node.label = member.label;
          stops.push(node);
        }
      }
    });
  });

  return stops;
}

/**
 * list the stop of bus
 * @param {number} bus_id id of bus L3 or L5 ...
 * @returns {}
 */
function getStop(bus_id) {
  const bus = relations.find(bus => bus.id == bus_id);
  // get the stops of bus
  let stops = [];
  bus.members.forEach(member => {
      if (member.type === 'node') {
        let node = findNodeByRef(member.ref);
        node.label = member.label;
        stops.push(node);
      }
    });
  return stops;
}

// function getStopLabel(stop_id) {

//   return STOPS[stop_id];
// }

module.exports = { getAllStop, getStop }