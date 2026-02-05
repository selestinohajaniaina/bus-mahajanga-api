// read result.json
const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');
const {
  ligne_7_Mena,
  ligne_7_Manga,
  ligne_18_Maitso,
  ligne_18_Mena,
  ligne_11_ambondrona_barea,
  ligne_11_barea_ambondrona,
  ligne_3_plak7_androva,
  ligne_3_androva_plak7,
  ligne_12_cda_aranta,
  ligne_12_aranta_cda,
  ligne_9_croisementblock_ambondrona,
  ligne_9_ambondrona_croisementblock,
  ligne_15_grand_pavoiscentre,
  ligne_15_centre_grandpavois,
  ligne_6_port_pambaamborovy,
  ligne_6_pambaamborovy_port,
  ligne_8_mangatokana_ankaraobato,
  ligne_8_ankaraobato_mangatokana,
  Ligne_5_Betamanga_Androva,
  Ligne_5_Androva_Betamanga,
  Ligne_Ankorefo_Analakely,
  Ligne_Analakely_Ankorefo
} = require('./data/data.js');

const labelToVar = {
  "Ligne 7 Plaque Mena": ligne_7_Mena,
  "Ligne 7 Plaque Manga": ligne_7_Manga,
  "Analakely-Ankorefo": Ligne_Analakely_Ankorefo,
  "Ankorefo-Analakely": Ligne_Ankorefo_Analakely,
  "Ligne 8 Mangatokana- Ankaraobato": ligne_8_mangatokana_ankaraobato,
  "Ligne 8 Ankaraobato-Mangatokana": ligne_8_ankaraobato_mangatokana,
  "Ligne 6 Port-Pamba Amborovy": ligne_6_port_pambaamborovy,
  "Ligne 11 Ambondrona-Barea": ligne_11_ambondrona_barea,
  "Ligne 6 Pamba Amborovy-Port": ligne_6_pambaamborovy_port,
  "Ligne 11 Barea-Ambondrona": ligne_11_barea_ambondrona,
  "Ligne 12 CDA Aqualma- Aranta": ligne_12_cda_aranta,
  "Ligne 12 Aranta-CDA Aqualma": ligne_12_aranta_cda,
  "Ligne 9 Ambondrona- croisement bloc": ligne_9_ambondrona_croisementblock,
  "Ligne 9 Croisement bloc-Ambondrona": ligne_9_croisementblock_ambondrona,
  "Ligne 3 plak-7-Androva": ligne_3_plak7_androva,
  "Ligne 3 Androva- plak-7": ligne_3_androva_plak7,
  "Ligne 5 Betamanga-Androva": Ligne_5_Betamanga_Androva,
  "Ligne 5 Androva- Betamanga": Ligne_5_Androva_Betamanga,
  "Ligne 15 Centre-grand pavois": ligne_15_grand_pavoiscentre,
  "Ligne 15 Grand pavois-centre": ligne_15_centre_grandpavois,
  "Ligne 18 Maintso": ligne_18_Maitso,
  "Ligne 18 Mena": ligne_18_Mena
};

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

/**
 * Lit le contenu d'un fichier HTML
 * @param {string} filename - Nom du fichier sans extension
 * @returns {string} Contenu brut du fichier HTML
 */
function getDataFromHtml(filename) {
    // Lecture du fichier HTML
    let resultPath = path.join(__dirname, `./data/${filename}.html`);
    let rawdata = fs.readFileSync(resultPath, 'utf-8');
    return rawdata;
}

let nodes = getData('nodes');
// let ways = getData('ways');
// let relations = getData('relations');

/**
 * returns latitude and longitude of a node
 * @param {number} id ref of node
 * @returns [latitude and longitutde]
 */
function getLatLngByNode(id) {
    let node = nodes.find(e => e.id === id);
    return [ node.lat, node.lon ];
}

/**
 * returns array of latitude and longitude of a way
 * @param {number} id ref of way
 * @returns [latitude and longitude]
 */
function getLatLngByWay(id) {
    let way = ways.find(e => e.id === id);
    let latlngs = way.nodes.map( nodeId => {
        return getLatLngByNode(nodeId);
    });
    return latlngs;
}

function findNodeByRef(ref) {
    return nodes.find(e => e.id === ref);
}

function appendLabelToNodeObject(ref, label) {
    nodes.map( node => {
        if( node.id === ref ) {
            node.label = label;
        }
    });
}

// iterate through relations to update nodes with labels
// relations.map( relation => {

//     let members = relation.members;
//     let positions = 0;

//     members.map( member => {
//         if( member.type === 'node' ) {
//             appendLabelToNodeObject(member.ref, labelToVar[relation.tags.name][positions]);
//             // console.log(findNodeByRef(member.ref));
//             positions ++;
//         }
//     });

// });


let ancien_nodes = getData('nodes');
let new_nodes = getData('new_nodes');

let htmlgeted = getDataFromHtml('data_osm');

// ancien_nodes.map( ancien_node => {
//     new_nodes.map( new_node => {
//         if( ancien_node.lat.toFixed(5) == new_node.lat.toFixed(5) && ancien_node.lon.toFixed(5) == new_node.lon.toFixed(5) ) {
//             ancien_node.label = new_node.label;
//             // console.log(ancien_node.lat.toFixed(5), new_node.lat.toFixed(5), ancien_node.lon.toFixed(5), new_node.lon.toFixed(5), new_node.label );
//         }
        
//     });
// });

// console.log(jsongeted );
// let nodesPath = path.join(__dirname, `./data/nodes.json`);
// fs.writeFileSync(nodesPath, JSON.stringify(ancien_nodes, null, 2));


/**
 * Parse HTML content with checkboxes into JSON data
 * @param {string} html - HTML content to parse
 * @returns {Array} Array of location objects
 */
function parseHtmlToJson(html) {
    // Create a DOM parser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    // Get all list items
    const listItems = doc.querySelectorAll('li');
    const locations = [];
    
    listItems.forEach(item => {
        // Get the checkbox input
        const checkbox = item.querySelector('input[type="checkbox"]');
        
        if (checkbox && checkbox.value) {
            try {
                // Parse the JSON from the value attribute
                const data = JSON.parse(checkbox.value);
                
                // Extract the text content (remove the number and dash if present)
                let name = item.textContent.trim();
                
                // Remove the leading number and dash (e.g., "1 - ")
                name = name.replace(/^\d+\s*-\s*/, '');
                
                // Remove trailing <br> text if any
                name = name.replace(/\s*<br>\s*$/i, '').trim();
                
                // Create location object
                const location = {
                    id: data.idx,
                    name: name,
                    coordinates: {
                        latitude: data.lat,
                        longitude: data.lon
                    },
                    rawName: item.textContent.trim()
                };
                
                locations.push(location);
            } catch (error) {
                console.error('Error parsing JSON from checkbox value:', error);
            }
        }
    });
    
    return locations;
}

// Alternative version using cheerio (if in Node.js environment)
function parseHtmlToJsonWithCheerio(html) {
    const cheerio = require('cheerio');
    const $ = cheerio.load(html);
    const locations = [];
    
    $('li').each((index, element) => {
        const $li = $(element);
        const $checkbox = $li.find('input[type="checkbox"]');
        
        if ($checkbox.length && $checkbox.val()) {
            try {
                const data = JSON.parse($checkbox.val());
                let name = $li.text().trim();
                
                // Clean up the name
                name = name.replace(/^\d+\s*-\s*/, '');
                name = name.replace(/\s*<br>\s*$/i, '').trim();
                
                locations.push({
                    id: data.idx,
                    lat: data.lat,
                    lon: data.lon,
                    label: name,
                });
            } catch (error) {
                console.error('Error parsing checkbox value:', error);
            }
        }
    });
    
    return locations;
}

// If you want to get the data directly from file and parse it
function getLocationsFromHtmlFile(filename) {
    const fs = require('fs');
    const path = require('path');
    
    // Read HTML file
    const resultPath = path.join(__dirname, `./data/${filename}.html`);
    const htmlContent = fs.readFileSync(resultPath, 'utf-8');
    
    // Parse HTML to JSON
    return parseHtmlToJsonWithCheerio(htmlContent);
}

// Si vous avez le HTML en chaîne de caractères
// const locations = parseHtmlToJson(htmlgeted);

// Si vous voulez lire depuis un fichier
const locationsFromFile = getLocationsFromHtmlFile('data_osm');

// Sauvegarder en JSON
const jsonOutput = JSON.stringify(locationsFromFile, null, 2);
console.log(jsonOutput);