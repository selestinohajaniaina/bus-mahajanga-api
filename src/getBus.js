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
  const seen = new Set();

  return nodes.filter((node) => {
    if (!node.label) return false;

    if (seen.has(node.label)) {
      return false; // already see → pass
    }

    seen.add(node.label);
    return true; // first found → keep
  });
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
 * @param {string} stop_label label of stop
 * @returns { Bus[] }
 */
export function findBusByStopLabel(stop_label) {
  return relations.filter((relation) => {
    return relation.members.some(
      (member) =>
        member.label && member.label.toUpperCase() == stop_label.toUpperCase()
    );
  });
}

/**
 * find Bus that have a one stop asked
 * @param {string} stop_label label of stop
 * @param {Bus[]} __relation list of bus to filter
 * @returns { Bus[] }
 */
export function __findBusByStopLabel(stop_label, relations, beginLabel) {
  return relations
    .map((rel) => {
      const beginIndex = rel.members.findIndex(
        (m) => m.label?.toUpperCase() === beginLabel.toUpperCase()
      );

      const endIndex = rel.members.findLastIndex(
        (m) => m.label?.toUpperCase() === stop_label.toUpperCase()
      );

      if (beginIndex === -1 || endIndex === -1) {
        return null;
      }

      return {
        ...rel,
        members: rel.members.slice(beginIndex, endIndex + 1),
      };
    })
    .filter((bus) => bus !== null && bus.members.length > 0);
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
  return __findBusByStopLabel(end, firstRelationsFound, begin);
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
 * fetch bus by operator
 * @returns { Bus[] }
 */
export function findBusOperator(operator) {
  return relations.filter((e) => e.tags.operator == operator);
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
