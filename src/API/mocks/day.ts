import { AvailabilityType, IDay } from "../types";

export const Days: IDay[] = [
  {
    id: "1",
    dayName: "Środa",
    date: "2020-07-10",
    rooms: [
      {
        id: "1",
        roomName: "Pokój I",
        desks: [
          {
            id: "1",
            deskName: "Biurko koło okna",
            available: AvailabilityType.available,
          },
          {
            id: "2",
            deskName: "Biurko środkowe",
            available: AvailabilityType.unavailable,
            user: "Informatyk I",
          },

          {
            id: "2",
            deskName: "Biurko koło drzwi",
            available: AvailabilityType.unavailable,
            user: "Informatyk II",
          },
        ],
      },
      {
        id: "2",
        roomName: "Pokój II",
        desks: [
          {
            id: "1",
            deskName: "Biurko koło okna",
            available: AvailabilityType.available,
          },
          {
            id: "2",
            deskName: "Biurko środkowe",
            available: AvailabilityType.unavailable,
            user: "Informatyk III",
          },

          {
            id: "2",
            deskName: "Biurko koło drzwi",
            available: AvailabilityType.unavailable,
            user: "Informatyk IV",
          },
        ],
      },
    ],
  },
];