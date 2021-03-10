import React, { useEffect, useState } from "react";
import moment from "moment";
import SimpleReactCalendar from "simple-react-calendar";

import { Button, InputSelect } from "../common";

import "./Reservation.scss";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import { IUser, LocationType } from "../../API/mocks/users";
import { ISelectOptions, roomsData, usersData } from "./Options";
import {
  AvailabilityType,
  IDay,
  IDesk,
  IRoom,
  IUsername,
} from "../../API/types";
import {
  useDataActionsContext,
  useDataContext,
} from "../../Context/DataContext";
import {
  useReservationActionsContext,
  useReservationContext,
} from "../../Context/ReservationContext";

export interface IReservationModal {
  closeModal: () => void; 
}

const Reservation: React.FC<IReservationModal> = ({ closeModal }) => {
  
  const { setRoom, setDesk, setDay, setUser } = useReservationActionsContext();
  const {
    room,
    desk,
    user: contextUser,
    day: contextDay,
  } = useReservationContext();
  const { data, users } = useDataContext();
  const { setData, setUsers } = useDataActionsContext();

  const [roomValue, setRoomValue] = useState<ISelectOptions>();
  const [deskValue, setDeskValue] = useState<ISelectOptions>();
  const [userValue, setUserValue] = useState<ISelectOptions>();

  const roomsOptions: ISelectOptions[] = roomsData.map((room: IRoom) => ({
    label: room.roomName,
    value: room.id,
  }));

  const usersOptions: ISelectOptions[] = usersData.map((user: IUsername) => ({
    label: user.userName,
    value: user.id,
  }));

  const [desks, setDesks] = useState<ISelectOptions[]>([]);

  useEffect(() => {
    setDeskValue(desks.find((option: ISelectOptions) => option.value === desk));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desk, desks]);

  useEffect(() => {
    const roomData: IRoom | undefined = roomsData.find(
      (data: IRoom) => data.id === room
    );

    setRoomValue(
      roomsOptions.find((option: ISelectOptions) => option.value === room)
    );
    setUserValue(
      usersOptions.find(
        (option: ISelectOptions) => option.value === contextUser
      )
    );
    setDesks(
      roomData?.desks.map((desk: IDesk) => ({
        label: desk.deskName,
        value: desk.id,
      })) ?? []
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  const handleReservation = () => {
    const tempDay: IDay[] = data.map((day: IDay) =>
      moment(day.date).isSame(contextDay, "day")
        ? {
            ...day,
            rooms: day.rooms.map((room: IRoom) => ({
              ...room,
              desks: room.desks.map((deskData: IDesk) =>
                deskData.id === desk
                  ? {
                      ...deskData,
                      user: contextUser,
                      available: AvailabilityType.unavailable,
                    }
                  : { ...deskData }
              ),
            })),
          }
        : {
            ...day,
          }
    );

    const tempUsers: IDailyUsers[] = users.map((dailyUser: IDailyUsers) =>
      moment(dailyUser.date).isSame(contextDay, "day")
        ? {
            ...dailyUser,
            users: dailyUser.users.map((user: IUser) =>
              user.name === contextUser
                ? {
                    ...user,
                    location: LocationType.office,
                  }
                : { ...user }
            ),
          }
        : {
            ...dailyUser,
          }
    );

    setData(tempDay);
    setUsers(tempUsers);
  };

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <i
        onClick={closeModal}
        className="bi bi-x reservation-close d-flex justify-content-end"
      ></i>
      <form onSubmit={() => handleReservation()}>
        <InputSelect
          inputId="UserId"
          label="Podaj swoje imię"
          options={usersOptions}
          placeholder="Podaj swoje imię"
          onChange={(option: ISelectOptions) => setUser(option.label)}
          value={userValue}
        />

        <InputSelect
          inputId="RoomId"
          label="Wybierz pokój, który chcesz zarezerwować"
          options={roomsOptions}
          placeholder="Wybierz pokój"
          onChange={(option: ISelectOptions) => setRoom(option.value)}
          value={roomValue}
        />

        <InputSelect
          inputId="DeskId"
          label="Wybierz biurko, które chcesz zarezerwować"
          options={desks}
          placeholder="Wybierz biurko"
          onChange={(option: ISelectOptions) => setDesk(option.value)}
          value={deskValue}
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

        <div className="d-flex justify-content-center">
          <Button className="btn btn-violet" type="submit">
            Zarezerwuj biurko
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
