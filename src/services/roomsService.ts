import { getAllPlaces } from "../API/fakeAPI";
import { IDay, IDesk, IRoom } from "../API/types";

function mapPlacesToCompany(rooms: IRoom[]): IRoom[] {
  const company: IRoom[] = rooms.map((room: IRoom) => ({
    roomName: room.roomName,
    desks: room.desks.map((desk: IDesk) => ({
      id: desk.id,
      deskName: desk.deskName,
      days: desk.days.map((day: IDay) => ({
        date: day.date,
        availability: day.availability,
        description: day.description,
        user: day.user,
      })),
      users: desk.users.map((user) => ({
        id: user.id,
        userName: user.userName,
      })),
    })),
  }));

  return company;
}

async function getAllWorkplaces(): Promise<IRoom[]> {
  // Potrzebna jest liczba wszystkich tripów do infinite scrolla
  // - powinna ta wartosc przychodzic z backendu
  // Metoda dodana tymczasowo, zeby nie korzystac z getUpcomingTrips,
  // ktora mimo ze zwraca te sama wartosc, nie sluzy do tego samego

  const workplace = await getAllPlaces();
  return mapPlacesToCompany(workplace);
}

export { getAllWorkplaces };
