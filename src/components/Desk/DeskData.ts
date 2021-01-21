export enum AvailabilityType {
  available = "Dostępne",
  unavailable = "zajęte",
}

export interface IAvailablePlace {
  rooms: IRoom[];
}

export interface IRoom {
  roomName: string;
  desks: IDesk[];
}

export interface IDesk {
  id: number;
  deskName: string;
  users: IUser[];
  days: IDay[];
}

export interface IDay {
  date: string;
  availability: boolean;
  description: string;
  user?: string;
}
export interface IUser {
  id: number;
  userName: string;
}

export const availablePlacesData: IAvailablePlace = {
  rooms: [
    {
      roomName: "Pokój I",
      desks: [
        {
          id: 1,
          deskName: "Biurko od okna",
          users: [
            {
              id: 1,
              userName: "Bolesław I Chrobry",
            },
            {
              id: 2,
              userName: "Mieszko II Lambert",
            },
            {
              id: 3,
              userName: "Bolesław II Szczodry",
            },
          ],
          days: [
            {
              date: "21.01.2020",
              availability: true,
              description: AvailabilityType.available,
            },
          ],
        },
        {
          id: 2,
          deskName: "Biurko środkowe",
          users: [
            {
              id: 1,
              userName: "Przemysław II",
            },
            {
              id: 2,
              userName: "Wacław II",
            },
            {
              id: 3,
              userName: "Wacław III",
            },
          ],
          days: [
            {
              date: "21.01.2020",
              availability: false,
              description: AvailabilityType.unavailable,
              user: "Wacław II",
            },
          ],
        },
        {
          id: 3,
          deskName: "Biurko od drzwi",
          users: [
            {
              id: 1,
              userName: "Władysław I Łokietek",
            },
            {
              id: 2,
              userName: "Kazimierz III Wielki",
            },
            {
              id: 3,
              userName: "Ludwig Węgierski",
            },
          ],
          days: [
            {
              date: "21.01.2020",
              availability: false,
              description: AvailabilityType.unavailable,
              user: "Ludwig Węgierski",
            },
          ],
        },
      ],
    },

    {
      roomName: "Pokój II",
      desks: [
        {
          id: 1,
          deskName: "Biurko od okna",
          users: [
            {
              id: 1,
              userName: "Jadwiga Andegaweńska",
            },
            {
              id: 2,
              userName: "Władysław III Warneńczyk",
            },
          ],
          days: [
            {
              date: "21.01.2020",
              availability: true,
              description: AvailabilityType.available,
            },
          ],
        },
        {
          id: 2,
          deskName: "Biurko środkowe",
          users: [
            {
              id: 1,
              userName: "Kazimierz IV Jagiellończyk",
            },
            {
              id: 2,
              userName: "Jan I Olbracht",
            },
          ],
          days: [
            {
              date: "21.01.2020",
              availability: false,
              description: AvailabilityType.unavailable,
              user: "Jan I Olbracht",
            },
          ],
        },
      ],
    },
  ],
};
