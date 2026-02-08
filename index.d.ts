type Bus = {
  type: string,
  id: number,
  members: Stop[],
  tags: {
    color: string,
    band: string[],
    board: string |null,
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

export function findStopAll(): Stop[];
export function findBusByOneStop(stopId: number): Bus[];
export function findBusByTwoStop(startStopId: number, endStopId: number): Bus[];
export function findBusDetailById(busId: number): Bus;
export function findBusAll(): Bus[];
export function findOperatorAll(): string[];
export function findZoneAll(): string[];
export function findBusDetailByOperator(operatorName: string): Bus[];
export function findOpenHoursAll(): string[];