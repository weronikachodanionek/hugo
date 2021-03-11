import React, { useEffect, useState } from "react";
import classnames from "classnames";

import { Room, Statisic, Users } from "..";

import styles from "./Day.module.scss";
import { IDay, IRoom } from "../../API/types";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import moment from "moment";
import { IUser, LocationType } from "../../API/mocks/users";
import { useDataContext } from "../../Context/DataContext";
import { useReservationContext } from "../../Context/ReservationContext";
import { integerNumberOfDesks } from "../../services/constants";
interface IDayProps {
  data: IDay;
}

const Day: React.FC<IDayProps> = ({ data }) => {
  const { users } = useDataContext();
  const { day } = useReservationContext();

  const [workHome, setWorkHome] = useState<number>(0);
  const [workOffice, setWorkOffice] = useState<number>(0);

  const workEverywhere = users.find((dailyUser: IDailyUsers) =>
    moment(dailyUser.date).isSame(day, "day")
  );

  useEffect(() => {
    setWorkHome(
      workEverywhere
        ? workEverywhere?.users.filter(
            (user: IUser) => user.location === LocationType.home
          ).length
        : 0
    );
  }, [users, workEverywhere]);

  useEffect(() => {
    setWorkOffice(workEverywhere ? workEverywhere?.users.length - workHome : 0);
  }, [users, workEverywhere, workHome]);

  const freeDesks = integerNumberOfDesks - workOffice;

  return (
    <>
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col-12">
          <div className="row">
            {data.rooms?.map((room: IRoom) => (
              <div
                className="col-sm-12 col-md-6 position-relative pb-3"
                key={room.id}
              >
                <h4 className={classnames(styles.roomName)}>{room.roomName}</h4>
                <Room key={room.id} room={room} />
              </div>
            ))}

            <div
              className={classnames(
                styles.users,
                "d-flex flex-wrap flex-column col mt-4"
              )}
            >
              <h4 className={classnames(styles.usersHeader, "pb-4")}>
                Wybranego w biurze obecni są:
              </h4>

              <div className="d-flex justify-content-start align-items-center flex-wrap">
                {users
                  ?.find((dailyUsers: IDailyUsers) =>
                    moment(dailyUsers.date).isSame(data.date, "day")
                  )
                  ?.users.map((user: IUser, key) => (
                    <Users user={user} key={key} />
                  ))}
              </div>

              <div className="row">
                <Statisic
                  workHome={workHome}
                  workOffice={workOffice}
                  freeDesks={freeDesks}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Day;
