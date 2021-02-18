import moment from "moment";

import { getAllPlaces } from "../API/fakeAPI";
import { IDay, IDesk, IRoom } from "../API/types";

function mapPlacesToCompany(days: IDay[]): IDay[] {
  const company: IDay[] = days.map((day: IDay) => ({
    id: day.id,
    date: moment(day.date).format(),
    dayName: day.dayName,
    rooms: day.rooms.map((room: IRoom) => ({
      id: room.id,
      roomName: room.roomName,
      desks: room.desks.map((desk: IDesk) => ({
        id: desk.id,
        deskName: desk.deskName,
        available: desk.available,
        user: desk.user,
      })),
    })),
  }));

  return company;
}

async function getAllWorkplaces(): Promise<IDay[]> {
  const workplace = await getAllPlaces();
  return mapPlacesToCompany(workplace);
}

export { getAllWorkplaces };
