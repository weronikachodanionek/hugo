import React, { useState } from "react";

import "react-tabs/style/react-tabs.scss";
import "./Calender.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IDay } from "../../API/types";
import { getAllPlaces } from "../../API/fakeAPI";
import Day from "../Day/Day";

const Calender: React.FC = () => {
  const [days, setDays] = useState<IDay[]>([]);
  const [tabIndex, setTabIndex] = useState(0);

  (function () {
    /*eslint-disable */
    getAllPlaces().then(
      (day) => {
        console.log(day);
        setDays(day);
      },
      (error) => console.log(error)
    );
    /*eslint-enable */
  })();

  return (
    <div
      className={
        "calender bg-gray d-flex justify-content-center align-items-start"
      }
    >
      <div className="col-10">
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index: number) => setTabIndex(index)}
        >
          <TabList>
            {days.map((day: IDay) => (
              <Tab>{day.dayName}</Tab>
            ))}
          </TabList>

          {days.map((day: IDay) => (
            <TabPanel>
              <Day days={day} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Calender;
