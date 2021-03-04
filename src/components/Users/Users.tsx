import React from "react";
import moment from "moment";
import classnames from "classnames";

import styles from "./Users.module.scss";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import { IUser, LocationType } from "../../API/mocks/users";
import { useReservationContext } from "../../Context/ReservationContext";
import { useDataContext } from "../../Context/DataContext";

const Users: React.FC = () => {
  const { day } = useReservationContext();
  const { users } = useDataContext();

  return (
    <div
      className={classnames(
        styles.users,
        "d-flex justify-content-center align-items-center bg-gray flex-wrap flex-column col"
      )}
    >
      <h4 className={classnames(styles.usersHeader, "pb-4 col-10")}>
        Dziś w biurze obecni są:
      </h4>

      <div className="d-flex justify-content-start align-items-center col-10 flex-wrap">
        {users
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
          ))}
      </div>
    </div>
  );
};

export default Users;
