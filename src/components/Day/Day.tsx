import React from "react";
import classnames from "classnames";

import { Room } from "..";

import styles from "./Day.module.scss";
import { IDay, IRoom } from "../../API/types";
interface IDayProps {
  data: IDay;
}

const Day: React.FC<IDayProps> = ({ data }) => {
  return (
    <div className="row d-flex flex-column justify-content-center align-items-center">
      <div className="col-12">
        <div className="row">
          {data.rooms?.map((room: IRoom) => (
            <div className="col-sm-12 col-md-6 position-relative px-4 pb-3" key={room.id}>
              <h4 className={classnames(styles.roomName)}>{room.roomName}</h4>
              <Room key={room.id} room={room} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day;
