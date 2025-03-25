const { STOPS, BUS_STOPS } = require('../data/bus.js');

/**
 * list all STOPS in data
 * @returns { [] }
 */
function getAllStop() {

    let stops = [];
    
    // format object STOPS to { key: string, value: string }
    Object.entries(STOPS).map((e)=> stops.push({key: e[0], value: e[1]}))
    
    return stops;
  }

/**
 * list the stop of bus
 * @param {String} bus_id id of bus L3 or L5 ...
 * @returns {}
 */
function getStop(bus_id) {

  // get the stops of bus
  return BUS_STOPS[bus_id]
}

function getStopLabel(stop_id) {

  return STOPS[stop_id];
}

module.exports = { getAllStop, getStop, getStopLabel }