import React from "react";
import classnames from "classnames";
import { IDesk } from "../../API/types";

import styles from "./Desk.module.scss";
import Point from "./Point";
import { Button } from "../common";
import useLocalStorage from "../../Hooks/useLocalStorage";

// import "./Desk.scss";

interface IDeskProps {
  desk: IDesk;
}

const Desk: React.FC<IDeskProps> = ({ desk }) => {
  const [name] = useLocalStorage<string | any>("name", "Bob");
  console.log("name", name, name.length);

  return (
    <div className={classnames(styles.desk, "w-100")}>
      <h3>{desk.deskName}</h3>

      {name.length <= 0 ? (
        <Point className="bg-available">
          <Button>Zarezerwuj</Button>
        </Point>
      ) : (
        <Point className="bg-unavailable">
          <div className={styles.pointUser}>{name}</div>
        </Point>
      )}
    </div>
  );
};

export default Desk;
