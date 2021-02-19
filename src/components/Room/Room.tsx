import React from "react";
import classnames from "classnames";

import { IDesk, IRoom } from "../../API/types";
import styles from "./Room.module.scss";
import Point from "../Point/Point";
import { useReservationActionsContext } from "../../Context/ReservationContext";
import { Button } from "../common";

export interface IRoomProps {
  room: IRoom;
}

const Room: React.FC<IRoomProps> = ({ room }) => {
  const { setDesk, setRoom } = useReservationActionsContext();

  const handleSetChosenPlace = (room: string, desk: string) => {
    setDesk(desk);
    setRoom(room);
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
                {/* <div className={classnames("text-center", styles.tooltip)}>
                   <span
                    onClick={() =>
                      handleSetChosenPlace(room.roomName, desk.deskName)
                    }
                    className="font-weight-normal text-primary text-uppercase"
                  >
                    Zarezerwuj
                  </span> 
               
                </div> */}
                <Button
                  onClick={() =>
                    handleSetChosenPlace(room.roomName, desk.deskName)
                  }
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
