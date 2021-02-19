import React from "react";
import classnames from "classnames";

import styles from "./Users.module.scss";
import { IUser, LocationType, usersList } from "./UsersList";

const Users: React.FC = () => {
  return (
    <div
      className={classnames(
        styles.users,
        "d-flex justify-content-center align-items-center bg-gray flex-wrap flex-column row"
      )}
    >
      <h4 className={classnames(styles.usersHeader, "pb-4 col-10")}>
        Dziś w biurze obecni są:
      </h4>

      <div className="d-flex justify-content-start align-items-center col-10 flex-wrap">
        {usersList?.map((user: IUser) => (
          <>
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
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
