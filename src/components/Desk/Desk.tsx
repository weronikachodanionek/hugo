import React from "react";
import classnames from "classnames";
import { AvailabilityType, IDesk } from "../../API/types";

import styles from "./Desk.module.scss";
import Point from "./Point";
import { Button } from "../common";
// import "./Desk.scss";

interface IDeskProps {
  desk: IDesk;
}

const Desk: React.FC<IDeskProps> = ({ desk }) => {
  return (
      <div className={classnames(styles.desk, "w-100")}>
        <h3>{desk.deskName}</h3>

        {desk.available === AvailabilityType.available ? (
          <Point className="bg-available">
            <Button>Zarezerwuj</Button>
          </Point>
        ) : (
          <Point className="bg-unavailable">
            <div className={styles.pointUser}>{desk.user}</div>
          </Point>
        )}
      </div>
  );
};

export default Desk;
