import React from "react";
import classnames from "classnames";

import { AvailabilityType, IDesk, IRoom } from "../../API/types";
import styles from "./Room.module.scss";
import { useReservationContext } from "../../Context/ReservationContext";
import Point from "../Point/Point";

export interface IRoomProps {
  room: IRoom;
}

const Room: React.FC<IRoomProps> = ({ room }) => {
  const { room: roomFromContext, day, user } = useReservationContext();

  console.log("user", user, user?.length);

  return (
    <>
      <p>{roomFromContext}</p>
      <p>{day}</p>
      <p>{user}</p>

      <div
        className={classnames(
          "gray-shadow position-relative d-flex flex-column justify-content-around align-items-center py-5",
          styles.room
        )}
      >
        {room?.desks.map((desk: IDesk) => (
          <div
            key={desk.id}
            className={classnames(
              "d-flex w-50 justify-content-md-center justify-content-lg-between flex-lg-row flex-sm-column flex-md-column align-items-center"
            )}
          >
            <i
              className={classnames(styles.deskIcon, "bi bi-laptop text-white")}
            ></i>
            <p className={classnames(styles.deskName, "text-white mb-0")}>
              {desk.deskName}
            </p>

            {user && user?.length > 0 ? (
              <Point className="icon-unavailable">
                <div className={classnames("text-center", styles.tooltip)}>
                  <i className="bi bi-person-check"></i>
                  <span className="ml-2 font-weight-normal">{user}</span>
                </div>
              </Point>
            ) : (
              <Point className="icon-available">
                <div className={classnames("text-center", styles.tooltip)}>
                  <span className="font-weight-normal text-primary text-uppercase">
                    Zarezerwuj
                  </span>
                </div>
              </Point>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Room;
