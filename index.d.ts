type Bus = {
  type: string,
  id: number,
  members: Stop[],
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
  lon: number,
  label: string | null,
}

declare module 'bus-mj' {
  export function findBusByOneStop(stopId: number): Bus[];
  export function findBusByTwoStop(startStopId: number, endStopId: number): Bus[];
  export function findBusAll(): Bus[];
  export function findBusDetailById(busId: number): Bus;
  export function findStopAll(): Stop[];
}