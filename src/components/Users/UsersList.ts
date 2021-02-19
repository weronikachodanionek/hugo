export enum LocationType {
  home = "Dom",
  office = "Biuro",
}

export interface IUser {
  name: string;
  location: string;
}

export const usersList: IUser[] = [
  {
    name: "Oktawiusz August",
    location: LocationType.home,
  },
  {
    name: "Tyberiusz",
    location: LocationType.office,
  },
  {
    name: "Kaligula",
    location: LocationType.home,
  },
  {
    name: "Neron",
    location: LocationType.home,
  },
  {
    name: "Galba",
    location: LocationType.office,
  },
  {
    name: "Oton",
    location: LocationType.home,
  },
  {
    name: "Witeliusz",
    location: LocationType.office,
  },
  {
    name: "Wespazjan",
    location: LocationType.office,
  },
  {
    name: "Tytus",
    location: LocationType.office,
  },
  {
    name: "Domicjan",
    location: LocationType.office,
  },
];
