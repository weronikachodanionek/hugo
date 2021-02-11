// export interface ISelectOptions {
//   value: string;
//   label: string;
// }

import { IRoom } from "../../API/types";

// export interface ISelectDay {
//   value: string;
// }


// export const roomsOptions: ISelectOptions[] = [
//   {
//     value: "sea",
//     label: "Pokój z widokiem na morze",
//   },
//   {
//     value: "penguins",
//     label: "Pokój z tapetą w pingwiny",
//   },
//   {
//     value: "terrace",
//     label: "Pokój z tarasem",
//   },
//   {
//     value: "kitchen",
//     label: "Pokój z kuchnią",
//   },
// ];

// export const desksOptions: ISelectOptions[] = [
//   {
//     value: "window",
//     label: "Biurko przy oknie",
//   },
//   {
//     value: "center",
//     label: "Biurko środkowe",
//   },
//   {
//     value: "door",
//     label: "Biurko przy drzwiach",
//   },
//   {
//     value: "corner",
//     label: "Biurko w rogu",
//   },
// ];




export interface ISelectOptions {
  value: string;
  label: string;
}

// export interface IDesks {
//   value: string;
//   label: string;
// }

export interface ISelectDay {
  value: string;
} 



// export const roomsOptions: ISelectOptions[] = [
//   {
//     value: "sea",
//     label: "Pokój z widokiem na morze",

//     desks: [
//       {
//         value: "window",
//         label: "Biurko przy oknie",
//       },
//       {
//         value: "center",
//         label: "Biurko środkowe",
//       },
//       {
//         value: "door",
//         label: "Biurko przy drzwiach",
//       },
//       {
//         value: "corner",
//         label: "Biurko w rogu",
//       },
//     ],
//   },
//   {
//     value: "penguins",
//     label: "Pokój z tapetą w pingwiny",

//     desks: [
//       {
//         value: "window",
//         label: "Biurko przy oknie",
//       },
//       {
//         value: "center",
//         label: "Biurko środkowe",
//       },
//       {
//         value: "door",
//         label: "Biurko przy drzwiach",
//       },
//       {
//         value: "corner",
//         label: "Biurko w rogu",
//       },
//     ],
//   },
//   {
//     value: "terrace",
//     label: "Pokój z tarasem",

//     desks: [
//       {
//         value: "window",
//         label: "Biurko przy oknie",
//       },
//       {
//         value: "center",
//         label: "Biurko środkowe",
//       },
//       {
//         value: "door",
//         label: "Biurko przy drzwiach",
//       },
//       {
//         value: "corner",
//         label: "Biurko w rogu",
//       },
//     ],
//   },
//   {
//     value: "kitchen",
//     label: "Pokój z kuchnią",

//     desks: [
//       {
//         value: "window",
//         label: "Biurko przy oknie",
//       },
//       {
//         value: "center",
//         label: "Biurko środkowe",
//       },
//       {
//         value: "door",
//         label: "Biurko przy drzwiach",
//       },
//       {
//         value: "corner",
//         label: "Biurko w rogu",
//       },
//     ],
//   },
// ];


export const roomsData: IRoom[] = [
  {
    id: "sea",
    roomName: "Pokój z widokiem na morze",
    desks: [
      {
        id: "sea-window",
        deskName: "Biurko przy oknie",
      },
      {
        id: "sea-center",
        deskName: "Biurko środkowe",
      },
      {
        id: "sea-door",
        deskName: "Biurko przy drzwiach",
      },
      {
        id: "sea-corner",
        deskName: "Biurko w rogu",
      },
    ],
  },
  {
    id: "penguins",
    roomName: "Pokój z tapetą w pingwiny",
    desks: [
      {
        id: "penguins-window",
        deskName: "Biurko przy oknie",
      },
      {
        id: "penguins-center",
        deskName: "Biurko środkowe",
      },
      {
        id: "penguins-door",
        deskName: "Biurko przy drzwiach",
      },
      {
        id: "penguins-corner",
        deskName: "Biurko w rogu",
      },
    ],
  },
];
