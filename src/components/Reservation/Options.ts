import { IRoom } from "../../API/types";

export interface ISelectOptions {
  value: string;
  label: string;
}

export interface ISelectDay {
  value: string;
}

export const roomsData: IRoom[] = [
  {
    id: "sea",
    roomName: "Pokój z widokiem na morze",
    desks: [
      {
        id: "sea-window",
        deskName: "S: Biurko przy oknie",
        user: "",
      },
      {
        id: "sea-center",
        deskName: "S: Biurko środkowe",
        user: "",
      },
      {
        id: "sea-door",
        deskName: "S: Biurko przy drzwiach",
        user: "",
      },
      {
        id: "sea-corner",
        deskName: "S: Biurko w rogu",
        user: "",
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
        user: "",
      },
      {
        id: "penguins-center",
        deskName: "P: Biurko środkowe",
        user: "",
      },
      {
        id: "penguins-door",
        deskName: "P: Biurko przy drzwiach",
        user: "",
      },
      {
        id: "penguins-corner",
        deskName: "P: Biurko w rogu",
        user: "",
      },
    ],
  },
];
