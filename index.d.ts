type Relation = {
  type: string,
  id: number,
  members: [{
      type: string,
      ref: number,
      role: string,
      label: string
    }],
  tags: {
    colour: string,
    fee: string,
    from: string,
    name: string,
    network: string,
    opening_hours: string,
    operator: string,
    "public_transport:version": string,
    ref: string,
    route: string,
    to: string,
    type: string
  }
};

type Stop = {
  type: string,
  id: number,
  lat: number,
  lon: number
}

declare module 'bus-mj' {
  export function getBus(start: number, end: number): Relation[];
  export function getAllBus(): Relation[];
  export function busAt(busId: number): Relation;
  export function getAllStop(): Stop[];
  export function getStop(busId: number): Stop[];
}