import React from "react";
import moment from "moment";
import classnames from "classnames";

import styles from "./Users.module.scss";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import { IUser, LocationType } from "../../API/mocks/users";
import { useReservationContext } from "../../Context/ReservationContext";
import { useDataContext } from "../../Context/DataContext";
import { Statisic } from "..";

interface IUsersPerDay {
  user: IUser;
}

const Users: React.FC<IUsersPerDay> = ({ user }) => {
  // const { day } = useReservationContext();
  // const { users } = useDataContext();

  return (
    <>
      {/* {users
          ?.find((dailyUsers: IDailyUsers) =>
            moment(dailyUsers.date).isSame(day, "day")
          )
          ?.users.map((user: IUser, key) => (
            <React.Fragment key={key}>
              {user.location === LocationType.office && (
                <div
                  className={classnames(
                    "d-flex justify-content-center align-items-center mr-3"
                  )}
                >
                  {user.name}
                  <i
                    className={classnames(
                      styles.usersPoint,
                      "ml-2 bi bi-circle-fill icon-available"
                    )}
                  ></i>
                </div>
              )}
            </React.Fragment>
          ))} */}

      <React.Fragment>
        {user.location === LocationType.office && (
          <div
            className={classnames(
              "d-flex justify-content-center align-items-center mr-3"
            )}
          >
            {user.name}
            <i
              className={classnames(
                styles.usersPoint,
                "ml-2 bi bi-circle-fill icon-available"
              )}
            ></i>
          </div>
        )}
      </React.Fragment>
    </>
  );
};

export default Users;
