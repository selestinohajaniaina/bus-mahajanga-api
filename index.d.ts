declare module 'bus-mj' {
  export function getBus(start: string, end: string): [{
    BUS_ID: string,
    ROAD: string[]
  }];
  export function getAllBus(): [{
    label: string,
    color: string,
    band: string[]
  }];
  export function busAt(busId: string): {label: string,color: string,band: string[], board: string | null};
  export function getAllStop(): { key: string, value: string }[];
  export function getStop(busId: string): string[];
  export function getStopLabel(stopId: string): string;
}