const express = require('express');
const fs = require('fs').promises;
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express();

app.use(cors({
  origin:"*"
}));

app.use(bodyParser.json());

async function read_contenu() {
  try {
    const data = await fs.readFile('bus.json', 'utf8');
    const jsonData = JSON.parse(data);
    return jsonData.data;
  } catch (err) {
    console.error('Erreur lors de la lecture du fichier:', err);
    throw err;
  }
}

async function get_bus(d, f) {
  try {

    const bus_contenu = await read_contenu();
    let cible = [];

    for(let i in bus_contenu) {

      if(bus_contenu[i]['stop'].includes(d) && bus_contenu[i]['stop'].includes(f)) {
        let A = bus_contenu[i]['stop'].indexOf(d);
        let B = bus_contenu[i]['stop'].indexOf(f);
        let trj = bus_contenu[i]['stop'].slice(A , B + 1);

        if(A > B) {
          trj = bus_contenu[i]['stop'].slice(B, A + 1);
          trj.reverse();
        }
        cible.push({
          "BUS_ID": bus_contenu[i]['id'],
          "BUS_NAME": bus_contenu[i]['name'],
          "BUS_PLAQUE": bus_contenu[i]['plaque'],
          "YOUR_TRAJET": trj,
          "TIME": "pas definie",
          "LONG": "pas definie"
        })
      }

    }

    return cible;

  } catch (error) {
    console.error('Une erreur s\'est produite:', error);
  }
}
// get_bus('boa', 'star');

app.get('/api', async (req, res) => {
  let depart = req.query.depart;
  let fin = req.query.fin;
  res.send(await get_bus(depart, fin));
})
app.listen(3000,console.log('server start on 3000'))