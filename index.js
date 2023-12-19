// utiliser tout les modules installee
const express = require('express');
const { getBus, getAllBus } = require('./src/getBus.js');
const { getAllStop, getStop } = require('./src/stop.js')
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();

// utiliser tout pour autoriser au cors
app.use(cors({
  origin:"*"
}));

// utilser le bodyParser pour lire le contenu json d'URL
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'css')));

// obtenir un trajet
app.get('/api', async (req, res) => {
  let depart = req.query.depart;
  let fin = req.query.fin;
  res.send(await getBus(depart, fin));
});

// obtenir tous les bus
app.get('/api/bus/all', async (req, res) => {
  res.send(await getAllBus());
})

// obtenir tous les arrets
app.get('/api/stop/all', async (req, res) => {
  res.send(await getAllStop());
})

// obtenir les arrets d'une bus
app.get('/api/stop', async (req, res) => {
  let id = req.query.id;
  res.send(await getStop(id));
})

// envoyer la documentation
app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(3000,console.log('server start on 3000'))