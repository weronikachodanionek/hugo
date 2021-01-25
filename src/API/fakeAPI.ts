import { Days } from "./mocks/day";
import { IDay, IDesk } from "./types";


function getAllPlaces(): Promise<IDay[]> {
  const placesPromise = new Promise<IDay[]>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 5) === 0;
      return error ? reject("ERROR! :>") : resolve(Days);
    }, 500);
  });

  return placesPromise;
}


export { getAllPlaces};
