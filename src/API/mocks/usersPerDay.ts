import moment from "moment";
import { IUser, LocationType, users } from "./users";

export interface IDailyUsers {
  date: string;
  users: IUser[];
}

export const DailyUsers: IDailyUsers[] = [
  {
    date: moment().format(),
    users: users.map((user: IUser) => ({
      ...user,
      location: LocationType.home
    }))
  },
  {
    date: moment().add(1, "days").format(),
    users: users.map((user: IUser) => ({
      ...user,
      location: LocationType.home
    })),
  },
  {
    date: moment().add(2, "days").format(),
    users: users.map((user: IUser) => ({
      ...user,
      location: LocationType.home
    }))
  },
  {
    date: moment().add(3, "days").format(),
    users: users.map((user: IUser) => ({
      ...user,
      location: LocationType.home
    }))
  },
  {
    date: moment().add(4, "days").format(),
    users: users.map((user: IUser) => ({
      ...user,
      location: LocationType.home
    }))
  },
];
