import React from "react";
import { Desk } from "..";
import { IDesk, IRoom } from "../../API/types";

import styles from "./Room.module.scss";

export interface IRoomProps {
  room: IRoom
}

const Room: React.FC<IRoomProps> = ({ room }) => {
  return (
    <div className={styles.rooms}>
      <div className={styles.room}>
        <h3>{room?.roomName}</h3>

        <div className={styles.desks}>
          {room?.desks.map((desk: IDesk) => (
            <div key={desk.id} className={styles.deskEl}>
              <Desk desk={desk} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
