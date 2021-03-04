import { IRoom, IUsername } from "../../API/types";

export interface ISelectOptions {
  value: string;
  label: string;
}

export interface ISelectDay {
  value: string;
}

export enum KindOfPlace {
  roomPlace = "roomPlace",
  deskPlace = "deskPlace",
}

export const roomsData: IRoom[] = [
  {
    id: "sea",
    roomName: "Pokój z widokiem na morze",
    desks: [
      {
        id: "sea-window",
        deskName: "S: Biurko przy oknie",
      },
      {
        id: "sea-center",
        deskName: "S: Biurko środkowe",
      },
      {
        id: "sea-door",
        deskName: "S: Biurko przy drzwiach",
      },
      {
        id: "sea-corner",
        deskName: "S: Biurko w rogu",
      },
    ],
  },
  {
    id: "penguins",
    roomName: "Pokój z zasłoną w pingwiny",
    desks: [
      {
        id: "penguins-window",
        deskName: "P: Biurko przy oknie",
      },
      {
        id: "penguins-center",
        deskName: "P: Biurko środkowe",
      },
      {
        id: "penguins-door",
        deskName: "P: Biurko przy drzwiach",
      },
      {
        id: "penguins-corner",
        deskName: "P: Biurko w rogu",
      },
    ],
  },
];

export const usersData: IUsername[] = [
  { id: "1", userName: "Oktawiusz August" },
  { id: "2", userName: "Tyberiusz" },
  { id: "3", userName: "Kaligula" },
  { id: "4", userName: "Neron" },
  { id: "5", userName: "Galba" },
  { id: "6", userName: "Oton" },
  { id: "7", userName: "Witeliusz" },
  { id: "8", userName: "Wespazjan" },
  { id: "9", userName: "Tytus" },
  { id: "10", userName: "Domicjan" },
];
