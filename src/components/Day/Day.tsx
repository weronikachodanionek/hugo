import React from "react";
import classnames from "classnames";

import { Room, Statisic, Users } from "..";

import styles from "./Day.module.scss";
import { IDay, IRoom } from "../../API/types";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import moment from "moment";
import { IUser } from "../../API/mocks/users";
import { useDataContext } from "../../Context/DataContext";
import { roomsData } from "../Reservation/Options";
interface IDayProps {
  data: IDay;
}

const Day: React.FC<IDayProps> = ({ data }) => {
  const { users } = useDataContext();
  console.log("xxx", users);

  return (
    <>
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col-12">
          <div className="row">
            {data.rooms?.map((room: IRoom) => (
              <div
                className="col-sm-12 col-md-6 position-relative px-4 pb-3"
                key={room.id}
              >
                <h4 className={classnames(styles.roomName)}>{room.roomName}</h4>
                <Room key={room.id} room={room} />
              </div>
            ))}


            <div
              className={classnames(
                styles.users,
                "d-flex justify-content-center align-items-center bg-gray flex-wrap flex-column col mt-4"
              )}
            >
              <h4 className={classnames(styles.usersHeader, "pb-4 col-10")}>
                Wybranego w biurze obecni są:
              </h4>

              <div className="d-flex justify-content-start align-items-center col-10 flex-wrap">
                {users
                  ?.find((dailyUsers: IDailyUsers) =>
                    moment(dailyUsers.date).isSame(data.date, "day")
                  )
                  ?.users.map((user: IUser, key) => (
                    <Users user={user} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Statisic /> 
    </>
  );
};

export default Day;
