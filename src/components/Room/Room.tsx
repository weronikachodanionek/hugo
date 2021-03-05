import React from "react";
import classnames from "classnames";

import { Point } from "..";
import { Button } from "../common";

import styles from "./Room.module.scss";
import { IDesk, IRoom } from "../../API/types";
import { useReservationActionsContext, useReservationContext } from "../../Context/ReservationContext";
import { useCollapseActionsContext } from "../../Context/ReservationCollapseContext";

export interface IRoomProps {
  room: IRoom;
}

const Room: React.FC<IRoomProps> = ({ room }) => {
  const { day } = useReservationContext();
  const { setDesk, setRoom, setDay } = useReservationActionsContext();

  const {
    setCollapseReservation,
    setVisibileButton,
  } = useCollapseActionsContext();

  const handleSetChosenPlace = (room: string, desk: string, day: Date) => {
    setDesk(desk);
    setRoom(room);
    setDay(day)
    setCollapseReservation(true);
    setVisibileButton(false);
    window.scroll({
      top: 650,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
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

            {desk.user && desk.user?.length > 0 ? (
              <Point className="icon-unavailable">
                <div className={classnames("text-center", styles.tooltip)}>
                  <i className="bi bi-person-check"></i>
                  <span className="ml-2 font-weight-normal">{desk.user}</span>
                </div>
              </Point>
            ) : (
              <Point className="icon-available">               
                <Button
                  onClick={() => handleSetChosenPlace(room.id, desk.id, day)}
                  className="btn-pink"
                >
                  Zarezerwuj
                </Button>
              </Point>
            )}
          </div>
        ))}
      </div>

    </>
  );
};

export default Room;
