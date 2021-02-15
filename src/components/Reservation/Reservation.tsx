import React, { useEffect, useState } from "react";
import classnames from "classnames";
import SimpleReactCalendar from "simple-react-calendar";
import { Collapse } from "react-collapse";

import "./Reservation.scss";
import { ISelectOptions, roomsData } from "./Options";
import InputSelect from "../common/Inputs/InputSelect";
import {
  useReservationActionsContext,
  useReservationContext,
} from "../../Context/ReservationContext";
import { IDesk, IRoom } from "../../API/types";

const Reservation: React.FC = () => {
  const [isOpenReservation, setOpenReservation] = useState<any>(false);

  const { setRoom, setDay } = useReservationActionsContext();
  const { room } = useReservationContext();

  const roomsOptions: ISelectOptions[] = roomsData.map((room: IRoom) => ({
    label: room.roomName,
    value: room.id,
  }));

  const [desks, setDesks] = useState<ISelectOptions[]>([]);

  useEffect(() => {
    const roomData: IRoom | undefined = roomsData.find(
      (data: IRoom) => data.id === room
    );
    setDesks(
      roomData?.desks.map((desk: IDesk) => ({
        label: desk.deskName,
        value: desk.id,
      })) ?? []
    );
  }, [room]);

  return (
    <div className="bg-gray pt-5 pb-5">
      <div className="d-flex justify-content-center align-content-center">
        {isOpenReservation === false && (
          <button
            className="btn btn-pink"
            onClick={() => setOpenReservation(!isOpenReservation)}
          >
            Zarezerwuj biurko
          </button>
        )}
      </div>

      <Collapse isOpened={isOpenReservation}>
        <div className="reservation-screen bg-silver d-flex justify-content-center align-items-center">
          <div className="reservation-modal bg-white d-flex justify-content-center align-items-center flex-column">
            <i
              className="bi bi-x reservation-close d-flex justify-content-end"
              onClick={() => setOpenReservation(!isOpenReservation)}
            ></i>
            <form>
              <InputSelect
                inputId="RoomId"
                label="Wybierz pokój, który chcesz zarezerwować"
                options={roomsOptions}
                placeholder="Wybierz pokój"
                onChange={(option: ISelectOptions) => setRoom(option.value)}
              />

              <InputSelect
                inputId="RoomId"
                label="Wybierz pokój, który chcesz zarezerwować"
                options={desks}
                placeholder="Wybierz pokój"
                onChange={(option: ISelectOptions) => setRoom(option.value)}
              />

              <div className="input-label">Wybierz datę</div>

              <SimpleReactCalendar
                onSelect={(start: Date) => {
                  setDay(start.getUTCDate());
                }}
                headerPrevArrow={
                  <i className="calendar-header_button bi bi-arrow-left-short"></i>
                }
                headerNextArrow={
                  <i className="calendar-header_button bi bi-arrow-right-short"></i>
                }
                activeMonth={new Date()}
              />

              <div className="w-100 d-flex justify-content-center align-content-center">
                {isOpenReservation === true && (
                  <button
                    className="btn btn-violet"
                    onClick={() => setOpenReservation(false)}
                  >
                    Zarezerwuj biurko
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Collapse>
    </div>
  );
};

export default Reservation;
