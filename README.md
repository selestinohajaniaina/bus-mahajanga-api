# API ho amantarana ny fivezivezian'ny bus eto Mahajanga

## <u> TANJONA </u>:

#### Ho fanampina ireo vahiny, hitady ny bus tokony andehanany

#### Hanamorana ny fitadidiana ny trajet an'bus iray

#### Hialana @ tsy fahafantarana ny "arret" tokony ialana

#### Ahitana ny:
- "point de depart" sy "point d'arrivee"
- distance entre "deux point"
- temps de circulation
- ...

## <u> FAMPIASA </u>:

https://bus-mj.onrender.com/api?depart=star&fin=poste

- fanazavana: <br>
depart: arret du point de depart <br>
fin: arret du point finnal

- ny azo: <br>
```json
{
    "BUS_ID": "identifiant ny bus",
    "BUS_NAME": "anaran'ilay bus",
    "BUS_PLAQUE": "lokon'ilay plaque",
    "LONG": "halaviran'ny lalana",
    "TIME": "fotoana lany",
    "YOUR_TRAJET": ["filaharan'ireo arret handalovana"]
}
```

- valiny ilay ohatra:
```json

[
  {
    "BUS_ID": 3,
    "BUS_NAME": "ligne 3",
    "BUS_PLAQUE": "",
    "LONG": 22,
    "TIME": 1,
    "YOUR_TRAJET": [
      "star",
      "plaque 7",
      "loterana",
      "bazary kely",
      "csb",
      "croisement cimetiere",
      "jovena",
      "lalatapaka",
      "plaque",
      "miaramila",
      "bazary antanimasaja",
      "pompy",
      "bizo",
      "galana",
      "manjarisoa",
      "jardin Caylah",
      "bain douche",
      "photo sport",
      "hôtel de ville",
      "croix rouge",
      "poste"
    ]
  },
  {
    "BUS_ID": 70,
    "BUS_NAME": "ligne 7",
    "BUS_PLAQUE": "bleu",
    "LONG": 32,
    "TIME": 51,
    "YOUR_TRAJET": [
      "star",
      "plaque 7",
      "loterana",
      "bazary kely",
      "csb",
      "croisement cimetiere",
      "jovena",
      "lalatapaka",
      "plaque",
      "miaramila",
      "bazary antanimasaja",
      "pompy",
      "bizo",
      "galana",
      "manjarisoa",
      "jardin Caylah",
      "galax",
      "mahabibo",
      "h\u00f4tel de ville",
      "croix rouge",
      "poste"
    ]
  },
  {
    "BUS_ID": 71,
    "BUS_NAME": "ligne 7",
    "BUS_PLAQUE": "rouge",
    "LONG": 5,
    "TIME": 53,
    "YOUR_TRAJET": [
      "star",
      "plaque 7",
      "loterana",
      "bazary kely",
      "csb",
      "croisement cimetiere",
      "jovena",
      "lalatapaka",
      "plaque",
      "miaramila",
      "bazary antanimasaja",
      "pompy",
      "bizo",
      "galana",
      "manjarisoa",
      "jardin Caylah",
      "bain douche",
      "mahabibo",
      "patel",
      "bata",
      "maki-loc",
      "tsaralaza",
      "pont blanc",
      "maman'i phillipine",
      "rond point cité",
      "rond point taxi",
      "croisement soatata",
      "secaline",
      "bar rotsaka",
      "croisement bloc",
      "pharmacie",
      "hopital manarapenitra",
      "caserne",
      "barea",
      "airtel",
      "solima",
      "lycée technique",
      "élevage",
      "roche rouge",
      "maison verte",
      "jardin d'amour",
      "nandrasana",
      "cnaps",
      "bord",
      "akbar",
      "kakal",
      "boa",
      "Bazary be",
      "score",
      "poste"
    ]
  }
]

```

## <u> Mbola hanampiana azy </u>:

+ donnee de ligne du BUS: 6, 9, 10, 11, 12, 15, 18
+ temps de circulation
+ longeur
+ ireo arret ao anaty ny fokotany irray
+ depart=_fokotany_ & arrivee=_fokotany_
+ mamatatra ny hoe mbola miasa ve io bus io @zao (maka ny heure actuel)
+ mifindra BUS raha tokony hifindra rehefa tonga @arret iray (Oh: belobaka vers petit plage)
+ ...