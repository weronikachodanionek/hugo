import { Days } from "./mocks/day";
import { IUser, users } from "./mocks/users";
import { DailyUsers, IDailyUsers } from "./mocks/usersPerDay";
import { IDay } from "./types";

function getAllPlaces(): Promise<IDay[]> {
  const placesPromise = new Promise<IDay[]>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 100) === 0;
      return error ? reject("Error") : resolve(Days);
    }, 500);
  });

  return placesPromise;
}

function getAllUsers(): Promise<IDailyUsers[]> {
  const usersPromise = new Promise<IDailyUsers[]>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 100) === 0;
      return error ? reject("Error") : resolve(DailyUsers);
    }, 500);
  });

  return usersPromise;
}

function getUsersForSelect(): Promise<IUser[]> {
  const usersPromise = new Promise<IUser[]>((resolve, reject) => {
    setTimeout(() => {
      const error = Math.floor(Math.random() * 100) === 0;
      return error ? reject("Error") : resolve(users);
    }, 500);
  });
  
  return usersPromise;
}

export { getAllPlaces, getAllUsers, getUsersForSelect };
