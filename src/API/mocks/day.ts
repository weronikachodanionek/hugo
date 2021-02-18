import { IDay } from "../types";

export const Days: IDay[] = [
  {
    id: "0",
    dayName: new Date("2020-02-18").getDate().toString(),
    date: "2020-07-11",
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

  // {
  //   id: "2",
  //   dayName: new Date("2020-07-12").getDate().toString(),
  //   date: "2020-07-12",
  //   rooms: [
  //     {
  //       id: "sea",
  //       roomName: "Pokój z widokiem na morze",
  //       desks: [
  //         {
  //           id: "sea-window",
  //           deskName: "Biurko koło okna",
  //           user: "",
  //         },
  //         {
  //           id: "sea-center",
  //           deskName: "Biurko środkowe",
  //           user: "",
  //         },

  //         {
  //           id: "sea-door",
  //           deskName: "Biurko koło drzwi",
  //           user: "",
  //         },
  //         {
  //           id: "sea-corner",
  //           deskName: "Biurko w rogu",
  //           user: "",
  //         },
  //       ],
  //     },
  //     {
  //       id: "penguins",
  //       roomName: "Pokój z zasłoną w pingwiny",
  //       desks: [
  //         {
  //           id: "penguins-window",
  //           deskName: "Biurko koło okna",
  //           user: "",
  //         },
  //         {
  //           id: "penguins-center",
  //           deskName: "Biurko środkowe",
  //           user: "",
  //         },

  //         {
  //           id: "penguins-door",
  //           deskName: "Biurko koło drzwi",
  //           user: "",
  //         },
  //         {
  //           id: "penguins-corner",
  //           deskName: "Biurko w rogu",
  //           user: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
];
