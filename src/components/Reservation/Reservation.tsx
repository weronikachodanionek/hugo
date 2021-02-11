import React, { useState } from "react";
import classnames from "classnames";
import SimpleReactCalendar from "simple-react-calendar";
import "./Reservation.scss";
import { desksOptions, ISelectOptions, roomsOptions } from "./Options";
import InputSelect from "../common/Inputs/InputSelect";
import { useReservationActionsContext } from "../../Context/ReservationContext";

export interface IModalReservation {
  //showModal: () => void;
}

const Reservation: React.FC<IModalReservation> = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const { setRoom } = useReservationActionsContext();

  return (
    <div>
      <button className="btn btn-main" onClick={() => setShowModal(true)}>
        Zarezerwuj biurko
      </button>

      {showModal === true && (
        <div className="reservation-screen">
          <div className="reservation-modal">
            <form>
              <InputSelect
                inputId="RoomId"
                label="Wybierz pokój, który chcesz zarezerwować"
                options={roomsOptions}
                placeholder="Wybierz pokój"
                onChange={(value: ISelectOptions ) =>
                  setRoom(value.label)
                }
              />

              <InputSelect
                inputId="DeskId"
                label="Wybierz biurko, które chcesz zarezerwować"
                options={desksOptions}
                placeholder="Wybierz biurko"
              />

              <div className="input-label">Wybierz datę</div>

              <SimpleReactCalendar
                onSelect={(start: any, end: any) => {
                  /* eslint-disable no-console */
                  console.log("click: ", { end, start });
                }}
                activeMonth={new Date()}
              />

              <div className="w-100 d-flex justify-content-center align-content-center">
                <button type="submit" className="btn btn-main">
                  Zarezerwuj
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reservation;
