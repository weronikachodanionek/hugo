import React, { useEffect, useState, useRef } from "react";
import SimpleReactCalendar from "simple-react-calendar";
import { Collapse } from "react-collapse";

import "./Reservation.scss";
import { ISelectOptions, roomsData } from "./Options";
import InputSelect from "../common/Inputs/InputSelect";
import {
  useReservationActionsContext,
  useReservationContext,
} from "../../Context/ReservationContext";
import { AvailabilityType, IDay, IDesk, IRoom } from "../../API/types";
import InputText from "../common/Inputs/TextInput";
import {
  useDataActionsContext,
  useDataContext,
} from "../../Context/DataContext";
import { Button } from "../common";
import useLocalStorage from "../../Hooks/useLocalStorage";
import {
  useCollapseActionsContext,
  useCollapseContext,
} from "../../Context/ReservationCollapseContext";

const Reservation: React.FC = () => {
  const [yourName] = useLocalStorage("", "");

  const { collapseReservation } = useCollapseContext();
  const { setCollapseReservation } = useCollapseActionsContext();

  const { setRoom, setDesk, setDay, setUser } = useReservationActionsContext();
  const { room, desk, user } = useReservationContext();
  const { data } = useDataContext();
  const { setData } = useDataActionsContext();

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

  const handleReservation = () => {
    const temp: IDay[] = data.map((day: IDay) => ({
      ...day,
      rooms: day.rooms.map((room: IRoom) => ({
        ...room,
        desks: room.desks.map((deskData: IDesk) =>
          deskData.id === desk
            ? {
                ...deskData,
                user: user,
                available: AvailabilityType.unavailable,
              }
            : { ...deskData }
        ),
      })),
    }));

    setData(temp);
    setCollapseReservation(false);
  };

  return (
    <div className="bg-gray pt-5 pb-5 col">
      {collapseReservation}

      <div className="d-flex justify-content-center align-content-center">
        {/* {collapseReservation === false && (
          <Button
            className="btn-pink"
            onClick={() => setCollapseReservation(true)}
          >
            Zarezerwuj biurko
          </Button>
        )} */}

        <Button
          className="btn-pink"
          onClick={() => setCollapseReservation(true)}
        >
          Zarezerwuj biurko
        </Button>
      </div>
      <p>{desk}</p>
      <p>{room}</p>

      {collapseReservation === true && (
        <Collapse isOpened={collapseReservation}>
          <div className="reservation-screen bg-gray d-flex justify-content-center align-items-center">
            <div className="reservation-modal bg-white d-flex justify-content-center align-items-center flex-column">
              <i
                className="bi bi-x reservation-close d-flex justify-content-end"
                onClick={() => setCollapseReservation(!collapseReservation)}
              ></i>
              <form>
                <InputText
                  inputId="userId"
                  label="Podaj swoje imię"
                  name="User"
                  value={user}
                  placeholder={yourName}
                  onChange={(e: any) => setUser(e.target.value)}
                />

                <InputSelect
                  inputId="RoomId"
                  label="Wybierz pokój, który chcesz zarezerwować"
                  options={roomsOptions}
                  placeholder="Wybierz pokój"
                  onChange={(option: ISelectOptions) => setRoom(option.value)}
                  // value={room}
                />

                <InputSelect
                  inputId="DeskId"
                  label="Wybierz biurko, które chcesz zarezerwować"
                  options={desks}
                  placeholder="Wybierz biurko"
                  onChange={(option: ISelectOptions) => setDesk(option.value)}
                  // value={desk}
                />

                <div className="input-label">Wybierz datę</div>

                <SimpleReactCalendar
                  onSelect={(day: Date) => {
                    setDay(day);
                  }}
                  onChange={(day: Date) => {
                    setDay(day);
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
                  {collapseReservation === true && (
                    <Button
                      className="btn btn-violet"
                      onClick={handleReservation}
                    >
                      Zarezerwuj biurko
                    </Button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </Collapse>
      )}
    </div>
  );
};

export default Reservation;
