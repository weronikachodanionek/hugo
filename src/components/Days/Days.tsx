import React, { useEffect, useState } from "react";
import moment from "moment";

import "react-tabs/style/react-tabs.scss";
import "./Days.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IDay } from "../../API/types";
import Day from "../Day/Day";
import { useDataContext } from "../../Context/DataContext";
import { useReservationContext } from "../../Context/ReservationContext";

const Days: React.FC = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);
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
          key={tabIndex}
        >
          <TabList>
            <Tab>
              <span className="react-tabs-today">dziś jest: </span>
              {moment(day).locale("pl").format("dddd DD.MM")}
            </Tab>
            <Tab> {moment(day).add(1, "days").format("dddd DD.MM")} </Tab>
            <Tab> {moment(day).add(2, "days").format("dddd DD.MM")} </Tab>
          </TabList>

          {data.map((day: IDay) => (
            <TabPanel key={day.id}>
              <Day data={day} />
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Days;
