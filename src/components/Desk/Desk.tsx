import React from "react";

import styles from "./Desk.module.scss";
import { IDesk } from "./DeskData";
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
          <div key={user.id} className={styles.deskUSer}>{user.userName}</div>
        ))}
      </div>
    </>
  );
};

export default Desk;
