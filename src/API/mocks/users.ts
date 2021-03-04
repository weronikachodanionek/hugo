export interface IUser {
  name: string;
  location?: string;
}

export enum LocationType {
  home = "Dom",
  office = "Biuro",
}

export const users: IUser[] = [
  {
    name: "Oktawiusz August",
  },
  {
    name: "Tyberiusz",
  },
  {
    name: "Kaligula",
  },
  {
    name: "Neron",
  },
  {
    name: "Galba",
  },
  {
    name: "Oton",
  },
  {
    name: "Witeliusz",
  },
  {
    name: "Wespazjan",
  },
  {
    name: "Tytus",
  },
  {
    name: "Domicjan",
  },
];
