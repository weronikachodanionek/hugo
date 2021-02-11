import React from "react";
import classnames from "classnames";

import { Desk } from "..";

import { IDesk, IRoom } from "../../API/types";
import styles from "./Room.module.scss";
import { useReservationContext } from "../../Context/ReservationContext";

export interface IRoomProps {
  room: IRoom;
}

const Room: React.FC<IRoomProps> = ({ room }) => {
  const { room: roomFromContext, desk, day } = useReservationContext();

  return (
    <div className={classnames(styles.rooms, "d-flex justify-content-center")}>
      <p>{roomFromContext}</p>
      <p>{day}</p>
      <p>{desk}</p>

      <div className="row w-100 justify-content-center align-content-center">
        <h4 className="text-uppercase text-primary mb-5 mt-5">
          {room?.roomName}
        </h4>

        <div className="w-100 d-flex">
          {room?.desks.map((desk: IDesk) => (
            <div key={desk.id} className="col-4">
              <Desk desk={desk} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
