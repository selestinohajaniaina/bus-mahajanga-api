// read result.json
const fs = require('fs');
const path = require('path');

const { getAllStop, getStop } = require('./src/stop');

/**
 * reads data from json file
 * @param {string} filename name of the file without extension
 * @returns parsed json data
 */
function getData(filename) {
    let resultPath = path.join(__dirname, `./data/${filename}.json`);
    let rawdata = fs.readFileSync(resultPath);
    return JSON.parse(rawdata);
}

let relations = getData('relations');

// iterate through relations to update nodes with labels
relations.map( relation => {
    // delete way members
    relation.members = relation.members.filter( mem => mem.type !== 'way' );
    relation.members = relation.members.map(({ label, ...rest }) => rest)
});

// save updated relations to json file
let updatedRelationsPath = path.join(__dirname, `./data/relations.json`);
fs.writeFileSync(updatedRelationsPath, JSON.stringify(relations, null, 2));
