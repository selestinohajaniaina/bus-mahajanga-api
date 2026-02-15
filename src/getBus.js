// src/getBus.js
import relationsData from "../data/relations.js";
import nodesData from "../data/nodes.js";

const nodes = nodesData;

let relations = relationsData.map((relation) => {
  relation.members = relation.members.map((member) =>
    findStopByRef(member.ref)
  );
  return relation;
});

/**
 * to find the node by ref in nodes
 * @param {number} ref id of node
 * @returns { Stop } detail of bus'stop
 */
export function findStopByRef(ref) {
  return nodes.find((e) => e.id === ref);
}

/**
 * list all STOPS in data
 * @returns { Stop[] }
 */
export function findStopAll() {
  return nodes.filter((node) => node.label != undefined);
}

/**
 * list the stop and detail of bus
 * @param {number} bus_id id of bus ...
 * @returns { Bus }
 */
export function findBusDetailById(bus_id) {
  return relations.find((bus) => bus.id == bus_id);
}

/**
 * find Bus that have a one stop asked
 * @param {number} stop_id id of stop
 * @returns { Bus[] }
 */
export function findBusByOneStop(stop_id) {
  return relations.filter((relation) => {
    return relation.members.some((member) => member.ref == stop_id);
  });
}

/**
 * find Bus that have a one stop asked
 * @param {number} stop_label label of stop
 * @returns { Bus[] }
 */
export function findBusByStopLabel(stop_label) {
  return relations.filter((relation) => {
    return relation.members.some((member) => member.label && member.label.toUpperCase() == stop_label.toUpperCase());
  });
}

/**
 * find the right bus of trajet giving
 * @param {number} begin STOP_ID - begin of Road
 * @param {number} end STOP_ID - end of Road
 * @returns { Bus[] }
 */
export function findBusByTwoStop(begin, end) {
  let firstRelationsFound = findBusByOneStop(begin);
  return firstRelationsFound.filter((relation) => {
    return relation.members.some((member) => member.ref === end);
  });
}

/**
 * find the right bus of trajet giving
 * @param {string} begin STOP_LABEL - begin of Road
 * @param {string} end STOP_LABEL - end of Road
 * @returns { Bus[] }
 */
export function findBusByTwoStopLabel(begin, end) {
  let firstRelationsFound = findBusByStopLabel(begin);
  return firstRelationsFound.filter((relation) => {
    const beginIndex = relation.members.findIndex(
      (member) => member.label && member.label.toUpperCase() == begin.toUpperCase()
    );
    const endIndex = relation.members.findIndex(
      (member) => member.label && member.label.toUpperCase() == end.toUpperCase()
    );
    return beginIndex != -1 && endIndex != -1 && beginIndex < endIndex;
  });
}

/**
 * list all bus detail of Operator
 * @param {string} operator_name id of operator ...
 * @returns { Bus[] }
 */
export function findBusDetailByOperator(operator_name) {
  return relations.filter(
    (bus) =>
      bus.tags.operator &&
      bus.tags.operator.toUpperCase() == operator_name.toUpperCase()
  );
}

/**
 * fetch all bus
 * @returns { Bus[] }
 */
export function findBusAll() {
  return relations;
}

/**
 * fetch all operator
 * @returns { string[] }
 */
export function findOperatorAll() {
  return relations
    .map((relation) => relation.tags.operator)
    .filter(
      (value, index, self) =>
        self.indexOf(value) === index && value != undefined
    );
}

/**
 * fetch all opennning hours
 * @returns { string[] }
 */
export function findOpenHoursAll() {
  return relations.map((relation) => relation.tags.opening_hours);
}

/**
 * fetch all zone
 * @returns { string[] }
 */
export function findZoneAll() {
  return relations
    .map((relation) => relation.tags.network)
    .filter(
      (value, index, self) =>
        self.indexOf(value) === index && value != undefined
    );
}