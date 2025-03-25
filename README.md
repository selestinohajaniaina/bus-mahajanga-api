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

## <u> import </u>:

```js
  import { getBus, getAllBus, getAllStop, getStop, getStopLabel } from 'bus-mj';
```

## <u> usage </u>:

- List Bus
```js
  // maka ny lisitry ny bus rehetra
  console.log(getAllBus());
```
```typescript
  // result
  {
    L3: {
      label: 'ligne 3',
      color: 'yellow',
      band: ['blue']
    },
    ...
  }
```

- List Stops
```js
  // maka ny lisitry ny bus rehetra
  console.log(getAllStop());
```
```typescript
// result
  [
    { key: 'S48', value: 'jardin kaylah' },
    { key: 'S49', value: 'jean paul 2' },
    { key: 'S50', value: 'jentilal' },
    ...
  ]
```

- Get Label of Stop's id
```js
  // maka ny anaran'ny arret 
  console.log(getStopLabel("S48"));
```
```typescript
  // result
  jardin kaylah
```

- Get Stop of Bus
```js
  // maka ny arret ny bus
  console.log(getStop("L3"));
```
```typescript
  // result
  ['S8',  'S72', 'S46', ..., 'S18']
```

- Get The Right Bus
```js
  // maka ny lisitry ny bus mandalo @ arret de depart S48='jardin kaylah' sy arrive S41='Galana'
  console.log(getBus('S48', 'S41'));
```
```typescript
  // result
  [
    { BUS_ID: 'L3', ROAD: [ 'S48', 'S63', 'S41' ] },
    ...
  ]
```

## <u> Mbola hanampiana azy </u>:

+ donnee de ligne du BUS: 6, 9, 12, 18
+ temps de circulation
+ longeur
+ ireo arret ao anaty ny fokotany irray
+ mamatatra ny hoe mbola miasa ve io bus io @zao (maka ny heure actuel)
+ mifindra BUS raha tokony hifindra rehefa tonga @arret iray (Oh: belobaka vers petit plage)
+ ...