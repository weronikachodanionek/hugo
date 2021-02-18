import React, { useState } from "react";

import "react-tabs/style/react-tabs.scss";
import "./Days.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IDay } from "../../API/types";
import Day from "../Day/Day";
import { useDataContext } from "../../Context/DataContext";
import { useReservationContext } from "../../Context/ReservationContext";

const Days: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const { data } = useDataContext();
  const { day } = useReservationContext();

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
            {/* {data.map((day: IDay) => (
              <Tab>{day.dayName}</Tab>
            ))} */}
            <Tab> {day?.toDateString()} </Tab>
          </TabList>

          {data.map((day: IDay) => (
            <TabPanel>
              <Day data={day} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Days;
