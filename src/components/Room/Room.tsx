import React from "react";
import classnames from "classnames";

import { AvailabilityType, IDesk, IRoom } from "../../API/types";
import styles from "./Room.module.scss";
import { useReservationContext } from "../../Context/ReservationContext";
import Point from "../Point/Point";
import { Button } from "../common";

export interface IRoomProps {
  room: IRoom;
}

const Room: React.FC<IRoomProps> = ({ room }) => {
  const { room: roomFromContext, desk, day } = useReservationContext();

  return (
    <div
      className={classnames(
        "d-flex flex-column justify-content-around align-items-center py-5",
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

          {desk.available === AvailabilityType.available ? (
            <Point className="icon-available">
              <Button>Zarezerwuj</Button>
            </Point>
          ) : (
            <Point className="icon-unavailable">
              <div
                className={classnames("text-center", styles.unavailableTooltip)}
              >
                Zajęte przez:
                <span className="font-weight-normal">{desk.user}</span>
              </div>
            </Point>
          )}
        </div>
      ))}

      {/*
      <div
        className={classnames(
          styles.rooms,
          "row d-flex justify-content-center"
        )} style={{border: "1px solid red"}}
      >
        <p>{roomFromContext}</p>
        <p>{day}</p>
        <p>{desk}</p>

       <div className="col-12">
       {room?.desks.map((desk: IDesk) => (
          <div
            key={desk.id}
            className={classnames(
              "d-flex justify-content-center align-items-center",
              styles.desk
            )}
          >
            <i className={classnames("bi bi-laptop text-white", styles.deskIcon)}></i> 
          </div>
        ))}
       </div>

        <div className="row">
          {room?.desks.map((desk: IDesk) => (
            <div key={desk.id} className={classnames("col-6")}>

            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Room;
