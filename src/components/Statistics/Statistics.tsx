import moment from "moment";
import React, { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

import { IUser, LocationType } from "../../API/mocks/users";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import { useDataContext } from "../../Context/DataContext";
import { useReservationContext } from "../../Context/ReservationContext";

const Statistics: React.FC = () => {
  const { users } = useDataContext();
  const { day } = useReservationContext();

  const [workHome, setWorkHome] = useState<number>(0);
  const [workOffice, setWorkOffice] = useState<number>(0);

  const workEverywhere = users.find((dailyUser: IDailyUsers) =>
    moment(dailyUser.date).isSame(day, "day")
  );

  useEffect(() => {
    setWorkHome(workEverywhere ? workEverywhere?.users.filter(
      (user: IUser) => user.location === LocationType.home 
    ).length : 0)
  },[users, workEverywhere])

  useEffect(() => {
    setWorkOffice(workEverywhere ? workEverywhere?.users.length - workHome : 0)
  },[users, workEverywhere, workHome])

  console.log("xxx off", workOffice)
  console.log("xxx home", workHome)

  return (
    <div className="d-flex justify-content-center align-items-center bg-gray pb-5">
      <PieChart
        paddingAngle={0}
        className="col-2"
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
        data={[
          {
            title: "Zdalnie",
            value: workHome,
            color: "#c7f032",
          },
          {
            title: "Biuro",
            value: workOffice,
            color: "#e6e3e7",
          },
        ]}
        labelStyle={() => ({
          fill: "#212529",
          fontSize: "6px",
        })}
        center={[50, 50]}
      />
    </div>
  );
};

export default Statistics;
