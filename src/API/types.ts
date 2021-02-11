export enum AvailabilityType {
  available = "Dostępne",
  unavailable = "Zajęte",
}

export interface IDay {
  id: string;
  dayName: string;
  // date: Date;
  //moment js
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
  available: string;
}

// export interface IRoom {
//   roomName: string;
//   desks: IDesk[];
// }

// export interface IDesk {
//   id: number;
//   deskName: string;
//   users: IUser[];
//   days: IDay[];
// }

// export interface IDay {
//   date: string;
//   availability: boolean;
//   description: string;
//   user?: string;
// }
// export interface IUser {
//   id: number;
//   userName: string;
// }
