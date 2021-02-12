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
        "row bg-gray d-flex justify-content-center align-items-start"
      )}
    >
      <div className="col-10">
        <Day day={day[0]} />
      </div>
    </div>
  );
};

export default Company;
