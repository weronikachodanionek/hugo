import React from "react";

import { IDay, IRoom } from "../../API/types";
import Room from "../Room/Room";
// import "./Desk.scss";

interface IDayProps {
  day: IDay;
}

const Day: React.FC<IDayProps> = ({ day }) => {
  return (
    <div className="row d-flex flex-column justify-content-center align-items-center">
      <h2 className="col-12 text-center">{day?.dayName}</h2>

      <div className="col-12">
        <div className="row">
          {day?.rooms?.map((room: IRoom) => (
            <div className="col-6">
              <h4 className="mb-3 text-center">{room.roomName}</h4>
              <Room room={room} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Day;
