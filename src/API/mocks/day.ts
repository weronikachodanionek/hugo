import { IDay } from "../types";
import moment from "moment";


export const Days: IDay[] = [
  {
    id: "0",
    dayName: moment().format("dddd DD.MM"),
    date: moment().format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
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
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "1",
    dayName: moment().add(1, "days").format("dddd DD.MM"),
    date: moment().add(1, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
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
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },

  {
    id: "2",
    dayName: moment().add(2, "days").format("dddd DD.MM"),
    date: moment().add(2, "days").format(),
    rooms: [
      {
        id: "sea",
        roomName: "Pokój z widokiem na morze",
        desks: [
          {
            id: "sea-window",
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "sea-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "sea-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "sea-corner",
            deskName: "Biurko w rogu",
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
            deskName: "Biurko koło okna",
            user: "",
          },
          {
            id: "penguins-center",
            deskName: "Biurko środkowe",
            user: "",
          },

          {
            id: "penguins-door",
            deskName: "Biurko koło drzwi",
            user: "",
          },
          {
            id: "penguins-corner",
            deskName: "Biurko w rogu",
            user: "",
          },
        ],
      },
    ],
  },
];
