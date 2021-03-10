import React, { useEffect, useState } from "react";
import moment from "moment";

import SimpleReactCalendar from "simple-react-calendar";
import { Collapse } from "react-collapse";

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
import {
  useCollapseActionsContext,
  useCollapseContext,
} from "../../Context/ReservationCollapseContext";

// import * as Yup from "yup";
// import {
//   IReservationValues,
//   reservationForm,
//   sendReservation,
// } from "./ReservationValues";

const Reservation: React.FC = () => {
  // const ReservationSchema = Yup.object().shape({
  //   UserId: Yup.string().required("Required"),
  //   RoomId: Yup.string().required("Required"),
  //   DeskId: Yup.string().required("Required"),
  // });

  const { collapseReservation, visibleButton } = useCollapseContext();
  const {
    setCollapseReservation,
    setVisibileButton,
  } = useCollapseActionsContext();

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

  const handleButtonBehavior = () => {
    setCollapseReservation(!collapseReservation);
    setVisibileButton(!visibleButton);
  };

  useEffect(() => {
    setDeskValue(desks.find((option: ISelectOptions) => option.value === desk));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [desk, desks]);

  useEffect(() => {
    const roomData: IRoom | undefined = roomsData.find(
      (data: IRoom) => data.id === room
    );

    // const userData: IUsername | undefined = usersData.find(
    //   (data: IUsername) => data.id === user
    // );

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

  // const initialValues: IReservationValues = {
  //   UserId: user,
  //   RoomId: room,
  //   DeskId: desk,
  // };

  // const formik = useFormik({
  //   initialValues: initialValues,
  //   validationSchema: ReservationSchema,

  //   onSubmit: (values) => {
  //     console.log("ppp", values);
  //     handleReservation();
  //     console.log("zarezerwowano biurko", formik.values.UserId);

  //     sendReservation(reservationForm(values));
  //     // setShowSuccessInf(true);
  //     formik.resetForm();

  //     // setTimeout(() => {
  //     //   setShowSuccessInf(false);
  //     // }, 3000);
  //   },
  // });

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
    setCollapseReservation(false);
    setVisibileButton(false);
  };

  //const [showSuccessInf, setShowSuccessInf] = useState(false);

  return (
    <div className="bg-gray pt-5 pb-5 col">
      <div className="d-flex justify-content-center align-content-center">
        <Button className="btn-pink" onClick={() => handleButtonBehavior()}>
          Zarezerwuj biurko
        </Button>
      </div>

      {collapseReservation === true && (
        <Collapse isOpened={collapseReservation}>
          <div className="reservation-screen bg-gray d-flex justify-content-center align-items-center">
            <div className="reservation-modal bg-white d-flex justify-content-center align-items-center flex-column">
              <i
                className="bi bi-x reservation-close d-flex justify-content-end"
                onClick={() => handleButtonBehavior()}
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
                {/* {formik.errors.RoomId && (
                  <p className="reservation-required">* pole wymagane</p>
                )} */}

                <InputSelect
                  inputId="DeskId"
                  label="Wybierz biurko, które chcesz zarezerwować"
                  options={desks}
                  placeholder="Wybierz biurko"
                  onChange={(option: ISelectOptions) => setDesk(option.value)}
                  value={deskValue}
                />
                {/* {formik.errors.DeskId && (
                  <p className="reservation-required">* pole wymagane</p>
                )} */}

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
                      type="submit"
                      //onSubmit={() => handleReservation()}
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
