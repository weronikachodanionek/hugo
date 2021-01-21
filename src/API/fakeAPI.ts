import { Rooms } from "./mocks/desks";
import { IRoom } from "./types";


function getAllPlaces(): Promise<IRoom[]> {
  const placesPromise = new Promise<IRoom[]>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 5) === 0;
      return error ? reject("ERROR! :>") : resolve(Rooms);
    }, 500);
  });

  return placesPromise;
}

export { getAllPlaces};
