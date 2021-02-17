import React, { useEffect, useState } from "react";

import "react-tabs/style/react-tabs.scss";
import "./Days.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IDay } from "../../API/types";
import { getAllPlaces } from "../../API/fakeAPI";
import Day from "../Day/Day";
import { roomsData } from "../Reservation/Options";
import { useDataContext } from "../../Context/DataContext";

const Days: React.FC = () => {
  const [days, setDays] = useState<IDay[]>([] as IDay[]);
  const [tabIndex, setTabIndex] = useState(0);

  // (function () {
  //   /*eslint-disable */
  //   getAllPlaces().then(
  //     (days) => {
  //       console.log("yyy", days);
  //       // setDays(days);
  //     },
  //     (error) => console.log(error)
  //   );
  //   /*eslint-enable */
  // })();

  const { data } = useDataContext();

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
            {data.map((day: IDay) => (
              <Tab>{day.dayName}</Tab>
            ))}
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
