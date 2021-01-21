import React from "react";

import styles from "./Desk.module.scss";
import { AvailabilityType, IDesk } from "./DeskData";
// import "./Desk.scss";

interface IDeskData {
  desk: IDesk;
}

const Desk: React.FC<IDeskData> = ({ desk }) => {
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
