export enum AvailabilityType {
  available = "Dostępne",
  unavailable = "Zajęte",
}

export interface IDay {
  id: string;
  tabIndex?: number;
  dayName: string;
  date: string;
  rooms: IRoom[];
}

export interface IRoom {
  id: string;
  roomName: string;
  desks: IDesk[];
}

export interface IDesk {
  id: string;
  deskName: string;
  user?: string;
  available?: string;
}
