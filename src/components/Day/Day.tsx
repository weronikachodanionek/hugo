import React from "react";

import { IDay, IRoom } from "../../API/types";
import Room from "../Room/Room";
interface IDayProps {
  days: IDay;
}

const Day: React.FC<IDayProps> = ({ days }) => {
  return (
    <div className="row d-flex flex-column justify-content-center align-items-center">
      <div className="col-12">
        <div className="row">
          {days?.rooms?.map((room: IRoom) => (
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
