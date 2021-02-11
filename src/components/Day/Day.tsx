import React from "react";

import { IDay, IRoom } from "../../API/types";
import Room from "../Room/Room";
// import "./Desk.scss";

interface IDayProps {
  day: IDay;
}

const Day: React.FC<IDayProps> = ({ day }) => {
  return (
    <div className="w-100 d-flex flex-column justify-content-center align-items-center">
      <h2>{day?.dayName}</h2>

      <div className="row">
        {day?.rooms?.map((room: IRoom) => (
          <div className="col-6">
            <Room room={room} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Day;
