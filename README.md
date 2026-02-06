# API ho amantarana ny fivezivezian'ny bus eto Mahajanga

## <u> TANJONA </u>:

#### Ho fanampina ireo vahiny, hitady ny bus tokony andehanany

#### Hanamorana ny fitadidiana ny trajet an'bus iray

#### Hialana @ tsy fahafantarana ny "arret" tokony ialana

## <u> import </u>:

```js
import {
  findBusAll,
  findStopAll,
  findBusDetailById,
  findBusByOneStop,
  findBusByTwoStop
} from "bus-mj";
```

## <u> usage </u>:

- List Bus

```js
// maka ny lisitry ny bus rehetra
console.log( findBusAll() );
```

```typescript
// result
[
  {
    type: "relation",
    id: 16057683,
    members: [
      {
        type: "node",
        id: 6450569024,
        lat: -15.7066094,
        lon: 46.3855679,
        label: "Imaintsoanala",
      },
      {
        type: "node",
        id: 2006531160,
        lat: -15.706214,
        lon: 46.3799647,
        label: "Abad",
      },
      ...
      {
        type: "node",
        id: 11027750469,
        lat: -15.7065943,
        lon: 46.3854314,
        label: "Arret 18",
      },
    ],
    tags: {
      colour: "orange",
      fee: "yes",
      from: "Belobaka",
      name: "Ligne 7 Plaque Mena",
      network: "Zone Urbaine",
      opening_hours: "Mo-Su 04:00-22:00",
      operator: "MAMI",
      "public_transport:version": "2",
      ref: "7",
      route: "bus",
      to: "Belobaka",
      type: "route",
    },
  },
  ...
];
```

- List Stops

```js
// maka ny lisitry ny arret bus rehetra
console.log( findStopAll() );
```

```typescript
// result
  [
    {
      type: 'node',
      id: 6450569024,
      lat: -15.7066094,
      lon: 46.3855679,
      label: 'Imaintsoanala'
    },
    ...
  ]
```

- Get Bus detail

```js
// maka ny mombamomba ny bus iray
console.log( findBusDetailById( 16057683 ) );
```

```typescript
  // result
  {
    type: "relation",
    id: 16057683,
    members: [
      {
        type: "node",
        id: 6450569024,
        lat: -15.7066094,
        lon: 46.3855679,
        label: "Imaintsoanala",
      },
      {
        type: "node",
        id: 2006531160,
        lat: -15.706214,
        lon: 46.3799647,
        label: "Abad",
      },
      ...
      {
        type: "node",
        id: 11027750469,
        lat: -15.7065943,
        lon: 46.3854314,
        label: "Arret 18",
      },
    ],
    tags: {
      colour: "orange",
      fee: "yes",
      from: "Belobaka",
      name: "Ligne 7 Plaque Mena",
      network: "Zone Urbaine",
      opening_hours: "Mo-Su 04:00-22:00",
      operator: "MAMI",
      "public_transport:version": "2",
      ref: "7",
      route: "bus",
      to: "Belobaka",
      type: "route",
    },
  }
```

- Find The Right Bus of one stop

```js
// maka ny lisitry ny bus mandalo @ arret iray
// ex: 2006531160 - arret bus Abad (Sotema)
console.log( findBusByOneStop( 2006531160 ) );
```

```typescript
// result
[
  {
    type: "relation",
    id: 16057683,
    members: [
      {
        type: "node",
        id: 6450569024,
        lat: -15.7066094,
        lon: 46.3855679,
        label: "Imaintsoanala",
      },
      {
        type: "node",
        id: 2006531160,
        lat: -15.706214,
        lon: 46.3799647,
        label: "Abad",
      },
      ...
      {
        type: "node",
        id: 11027750469,
        lat: -15.7065943,
        lon: 46.3854314,
        label: "Arret 18",
      },
    ],
    tags: {
      colour: "orange",
      fee: "yes",
      from: "Belobaka",
      name: "Ligne 7 Plaque Mena",
      network: "Zone Urbaine",
      opening_hours: "Mo-Su 04:00-22:00",
      operator: "MAMI",
      "public_transport:version": "2",
      ref: "7",
      route: "bus",
      to: "Belobaka",
      type: "route",
    },
  },
  ...
];
```


- Find The Right Bus of 2 stops

```js
// maka ny lisitry ny bus mandalo @ arret roa
// ex1: 2006531160 - arret bus Abad (Sotema)
// ex2: 11029976167 - arret bus Bord (Majunga be)
console.log( findBusByTwoStop( 2006531160, 11029976167 ) );
```

```typescript
// result
[
  {
    type: "relation",
    id: 16057683,
    members: [
      ...
      {
        type: "node",
        id: 2006531160,
        lat: -15.706214,
        lon: 46.3799647,
        label: "Abad",
      },
      ...
      {
        type: 'node',
        id: 11029976167,
        lat: -15.7211965,
        lon: 46.3047163,
        label: 'Bord'
      },
      ...
    ],
    tags: {
      colour: "orange",
      fee: "yes",
      from: "Belobaka",
      name: "Ligne 7 Plaque Mena",
      network: "Zone Urbaine",
      opening_hours: "Mo-Su 04:00-22:00",
      operator: "MAMI",
      "public_transport:version": "2",
      ref: "7",
      route: "bus",
      to: "Belobaka",
      type: "route",
    },
  },
  ...
];
```

## <u> Mbola hanampiana azy </u>:

- fanavahana ireo arret bus rehetra ao anaty ny fokotany iray
- fifindrana bus raha toa ka tsy misy bus mivantana amin'ny arret roa (02). Oh: belobaka - petit plage => [ ligne 7 mifindra ligne 12 na ligne 15 ]