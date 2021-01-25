import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Company.module.scss";
import Day from "./components/Day/Day";
import { getAllPlaces } from "./API/fakeAPI";
import { IDay } from "./API/types";

const Company: React.FC = () => {
  const [day, setDay] = useState<IDay[]>([]);

  (function () {
    /*eslint-disable */
    getAllPlaces().then(
      (day) => {
        console.log(day);
        setDay(day);
      },
      (error) => console.log(error)
    );
    /*eslint-enable */
  })();

  return (
    <div
      className={classnames(
        styles.company,
        "bg-gray d-flex justify-content-center align-items-start"
      )}
    >
      <Day day={day[0]} />
    </div>
  );
};

export default Company;
