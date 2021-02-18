export enum PresenceType {
  present = "Obecny",
  absent = "Nieobecny",
}

export interface IUser {
  name: string;
  presence: string;
}

export const usersList: IUser[] = [
  {
    name: "Oktawiusz August",
    presence: PresenceType.present,
  },
  {
    name: "Tyberiusz",
    presence: PresenceType.present,
  },
  {
    name: "Kaligula",
    presence: PresenceType.present,
  },
  {
    name: "Neron",
    presence: PresenceType.present,
  },
  {
    name: "Galba",
    presence: PresenceType.present,
  },
  {
    name: "Oton",
    presence: PresenceType.present,
  },
  {
    name: "Witeliusz",
    presence: PresenceType.present,
  },
  {
    name: "Wespazjan",
    presence: PresenceType.present,
  },
  {
    name: "Tytus",
    presence: PresenceType.present,
  },
  {
    name: "Domicjan",
    presence: PresenceType.present,
  },
];
