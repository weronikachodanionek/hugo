import React, { useEffect, useState } from "react";
import moment from "moment";
import SimpleReactCalendar from "simple-react-calendar";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Button, InputSelect } from "../common";

import "./Reservation.scss";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import { IUser, LocationType } from "../../API/mocks/users";
import { ISelectOptions, roomsData } from "./Options";
import { AvailabilityType, IDay, IDesk, IRoom } from "../../API/types";
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
  const ReservationSchema = Yup.object().shape({
    userId: Yup.string().required("Required"),
    roomId: Yup.string().required("Required"),
    deskId: Yup.string().required("Required"),
  });

  const { setRoom, setDesk, setDay, setUser } = useReservationActionsContext();
  const {
    room,
    desk,
    user: contextUser,
    day: contextDay,
  } = useReservationContext();
  const { data, users, selectUsers } = useDataContext();
  const { setData, setUsers } = useDataActionsContext();

  const [roomValue, setRoomValue] = useState<ISelectOptions>();
  const [deskValue, setDeskValue] = useState<ISelectOptions>();
  const [userValue, setUserValue] = useState<ISelectOptions>();

  const roomsOptions: ISelectOptions[] = roomsData.map((room: IRoom) => ({
    label: room.roomName,
    value: room.id,
  }));

  const usersOptions: ISelectOptions[] = selectUsers.map((user: IUser) => ({
    label: user.name,
    value: user.id.toString(),
  }));

  const [desks, setDesks] = useState<ISelectOptions[]>([]);

  useEffect(() => {
    return () => {
      setRoomValue(undefined);
      setDeskValue(undefined);
      setUserValue(undefined);
      setRoom(undefined);
      setDesk(undefined);
      setUser(undefined);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setDeskValue(desks.find((option: ISelectOptions) => option.value === desk));
    formik.setFieldValue("deskId", desk);
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
    formik.setFieldValue("roomId", room);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [room]);

  const handleReservation = () => {
    //  e.preventDefault();
    //e: React.FormEvent<HTMLFormElement>

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
                      user: selectUsers.find(
                        (user: IUser) => user.id === contextUser
                      )?.name,
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
              user.id === contextUser
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
    closeModal();
  };

  const formik = useFormik({
    initialValues: {
      userId: userValue,
      roomId: roomValue,
      deskId: deskValue,
    },
    validationSchema: ReservationSchema,

    onSubmit: () => {
      handleReservation();
    },
  });

  const handleFormikUserChange = (option: ISelectOptions) => {
    setUser(option.value);
    formik.setFieldValue("userId", option.value);
  };

  const handleFormikRoomChange = (option: ISelectOptions) => {
    setRoom(option.value);
  };

  const handleFormikDeskChange = (option: ISelectOptions) => {
    setDesk(option.value);
  };

  return (
    <div className="bg-white d-flex justify-content-center align-items-center flex-column">
      <i
        onClick={closeModal}
        className="bi bi-x reservation-close d-flex justify-content-end"
      ></i>

      <form onSubmit={formik.handleSubmit}>
        <InputSelect
          inputId="userId"
          label="Podaj swoje imię"
          options={usersOptions}
          placeholder="Podaj swoje imię"
          onChange={handleFormikUserChange}
          value={userValue}
        />

        {formik.errors.userId && (
          <div className="reservation-required">* Proszę podać swoje imię</div>
        )}

        <InputSelect
          inputId="roomId"
          label="Wybierz pokój, który chcesz zarezerwować"
          options={roomsOptions}
          placeholder="Wybierz pokój"
          //onChange={(option: ISelectOptions) => setRoom(option.value)}
          onChange={handleFormikRoomChange}
          value={roomValue}
        />

        {formik.errors.roomId && (
          <div className="reservation-required">* Proszę wybrać pokój</div>
        )}

        <InputSelect
          inputId="deskId"
          label="Wybierz biurko, które chcesz zarezerwować"
          options={desks}
          placeholder="Wybierz biurko"
          //onChange={(option: ISelectOptions) => setDesk(option.value)}
          value={deskValue}
          onChange={handleFormikDeskChange}
        />

        {formik.errors.deskId && (
          <div className="reservation-required">* Proszę wybrać biurko</div>
        )}

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
          selected={contextDay}
        />

        <div className="d-flex justify-content-center">
          <Button
            className="btn btn-violet"
            type="submit"
            onClick={() => handleReservation}
          >
            Zarezerwuj biurko
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
