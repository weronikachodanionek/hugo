export enum AvailabilityType {
  available = "Dostępne",
  unavailable = "Zajęte",
}

export interface IRoom {
  roomName: string;
  desks: IDesk[];
}

export interface IDesk {
  id: number;
  deskName: string;
  users: IUser[];
  days: IDay[];
}

export interface IDay {
  date: string;
  availability: boolean;
  description: string;
  user?: string;
}
export interface IUser {
  id: number;
  userName: string;
}
