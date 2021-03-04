import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDataContext } from "../../Context/DataContext";
import { useReservationContext } from "../../Context/ReservationContext";
import { usersData } from "../Reservation/Options";

const Statistics: React.FC = () => {
  const { user } = useReservationContext();
  const { users } = useDataContext();

  const allUsers = usersData;
  const homeUsers = 7;

  // const homeUsers = usersList.filter(
  //   (user: IUser) => user.location === LocationType.home
  // );
  // const officeUsers = usersList.filter(
  //   (user: IUser) => user.location === LocationType.office
  // );

  // const percentHomeUsers = parseInt(
  //   (Number(homeUsers.length / officeUsers.length) * 100).toFixed(2)
  // );
  // const percentOfficeUsers = 100 - percentHomeUsers;

  return (
    <div className="d-flex justify-content-center align-items-center bg-gray pb-5">
      <PieChart
        paddingAngle={3}
        className="col-2"
        label={(props) => {
          return props.dataEntry.value + "%";
        }}
        data={[
          {
            title: "Zdalnie",
            //value: percentHomeUsers,
            value: homeUsers,

            color: "#c7f032",
          },
          {
            title: "Biuro",
            //value: percentOfficeUsers,
            value: allUsers.length,

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
