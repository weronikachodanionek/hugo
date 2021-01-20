import React from "react";
import { Desk } from "..";
import { IAvailablePlace } from "../Desk/DeskData";

import styles from "./Room.module.scss";

interface IRoom {
  availablePlacesData: IAvailablePlace;
}

const Room: React.FC<IRoom> = ({ availablePlacesData }) => {
  return (
    <div className={styles.rooms}>
      {availablePlacesData.rooms.map((room) => (
        <div className={styles.room}>
          <h3>{room.roomName}</h3>

          <div className={styles.desks}>
            {room.desks.map((desk) => (
              <div key={desk.id} className={styles.deskEl}>
                <Desk desk={desk} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Room;
