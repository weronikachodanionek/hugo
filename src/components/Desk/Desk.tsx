import React from "react";
import { AvailabilityType, IDesk } from "../../API/types";

import styles from "./Desk.module.scss";
// import "./Desk.scss";

interface IDeskProps {
  desk: IDesk;
}

const Desk: React.FC<IDeskProps> = ({ desk }) => {

  return (
    <>
      <div className={styles.desk}>
        <h3>{desk.deskName}</h3>
        {desk.users.map((user) => (
          <div key={user.id} className={styles.deskUSer}>
            {user.userName}
          </div>
        ))}

        <h3>Dostępność biurka</h3>
        {desk.days.map((day) => (
          <>
            <div className={styles.deskUser}>Dzień: {day.date}</div>
            <div className={styles.deskUser}>Dostępność: {day.description}</div>

            {day.description === AvailabilityType.unavailable && (
              <div className={styles.deskUser}>Kot: {day.user}</div>
            )}
          </>
        ))}
      </div>
    </>
  );
};

export default Desk;
