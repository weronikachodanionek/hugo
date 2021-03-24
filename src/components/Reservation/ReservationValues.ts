export interface IReservationValues {
  UserId: string | undefined;
  RoomId: string | undefined;
  DeskId: string | undefined;
}

export interface IReservationFormData {
  name: string | undefined;
  room: string | undefined;
  desk: string | undefined;
}

function reservationForm(values: IReservationValues): IReservationFormData {
  const dataReservaion = {
    name: values.UserId,
    room: values.RoomId,
    desk: values.DeskId,
  };
  return dataReservaion;
}

async function sendReservation(dataReservation: IReservationFormData) {
  console.log("Zarezerwowano", dataReservation);
}

export { reservationForm, sendReservation };
