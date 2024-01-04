// index.d.ts

declare module 'bus-mj' {
  export function getBus(arg1: string, arg2: string): [{
    BUS_ID: number,
  BUS_NAME: string,
  BUS_PLAQUE: string,
  LONG: string,
  TIME: string,
  YOUR_TRAJET: []
  }];
  export function getAllBus(): [{
    BUS_ID: number,
    BUS_NAME: string
  }];
  export function getAllStop(): [];
  export function getStop(arg1: number): [];
}
