import { getAllPlaces } from "../API/fakeAPI";
import { IDay, IDesk, IRoom } from "../API/types";

function mapPlacesToCompany(days: IDay[]): IDay[] {
  const company: IDay[] = days.map((day: IDay) => ({
    id: day.id,
    date: day.date,
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
  // Potrzebna jest liczba wszystkich tripów do infinite scrolla
  // - powinna ta wartosc przychodzic z backendu
  // Metoda dodana tymczasowo, zeby nie korzystac z getUpcomingTrips,
  // ktora mimo ze zwraca te sama wartosc, nie sluzy do tego samego

  const workplace = await getAllPlaces();
  return mapPlacesToCompany(workplace);
}

export { getAllWorkplaces };
