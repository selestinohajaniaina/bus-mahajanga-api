const { read_contenu } = require('./read_contenu.js')

/**
 * list all STOPS in data
 * @returns { [] }
 */
async function getAllStop() {

    // get the data from data loaded
    const bus_contenu = await read_contenu();

    let stops = [];
    
    // format object STOPS to { key: string, value: string }
    Object.entries(bus_contenu.STOPS).map((e)=> stops.push({key: e[0], value: e[1]}))
    
    return stops;
  }

/**
 * list the stop of bus
 * @param {String} bus_id id of bus L3 or L5 ...
 * @returns {}
 */
async function getStop(bus_id) {

  // get the data from data loaded
  const bus_contenu = await read_contenu();

  // get the stops of bus
  return bus_contenu.BUS_STOPS[bus_id]
}

module.exports = { getAllStop, getStop }