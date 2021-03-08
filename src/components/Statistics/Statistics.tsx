import moment from "moment";
import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { PieChart } from "react-minimal-pie-chart";

import { IUser, LocationType } from "../../API/mocks/users";
import styles from "./Statistics.module.scss";
import { IDailyUsers } from "../../API/mocks/usersPerDay";
import { useDataContext } from "../../Context/DataContext";
import { useReservationContext } from "../../Context/ReservationContext";
import { integerNumberOfDesks } from "../../services/constants";
import { useCollapseActionsContext } from "../../Context/ReservationCollapseContext";

const Statistics: React.FC = () => {
  const { users } = useDataContext();
  const { day } = useReservationContext();

  const [workHome, setWorkHome] = useState<number>(0);
  const [workOffice, setWorkOffice] = useState<number>(0);
  useCollapseActionsContext();

  const workEverywhere = users.find((dailyUser: IDailyUsers) =>
    moment(dailyUser.date).isSame(day, "day")
  );

  useEffect(() => {
    setWorkHome(
      workEverywhere
        ? workEverywhere?.users.filter(
            (user: IUser) => user.location === LocationType.home
          ).length
        : 0
    );
  }, [users, workEverywhere]);

  useEffect(() => {
    setWorkOffice(workEverywhere ? workEverywhere?.users.length - workHome : 0);
  }, [users, workEverywhere, workHome]);

  const freeDesks = integerNumberOfDesks - workOffice;

  return (
    <div className="d-flex flex-column justify-content-center align-items-center bg-gray pb-5 col-12">
      {workOffice > 0 ? (
        <>
          <div className="d-flex justify-content-center align-items-center row">
            <PieChart
              paddingAngle={0}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
              className="col-5"
              data={[
                {
                  title: "Zdalnie",
                  value: workHome,
                  color: "#e6e3e7",
                },
                {
                  title: "Biuro",
                  value: workOffice,
                  color: "#c7f032",
                },
              ]}
              labelStyle={() => ({
                fill: "#212529",
                fontSize: "6px",
              })}
              center={[50, 50]}
            />
            <div className="d-flex flex-column col-5">
              <div className="d-flex align-items-center ml-3">
                <div
                  className={classnames(styles.statisticsPoint, "bg-green")}
                ></div>
                <p
                  className={classnames(
                    styles.statisticsLabel,
                    "font-weight-light ml-2 mb-0"
                  )}
                >
                  Praca z biura
                </p>
              </div>

              <div className="d-flex align-items-center ml-3">
                <div
                  className={classnames(styles.statisticsPoint, "bg-silver")}
                ></div>
                <p
                  className={classnames(
                    styles.statisticsLabel,
                    "font-weight-light ml-2 mb-0"
                  )}
                >
                  Praca z domu
                </p>
              </div>
            </div>
          </div>

          <div
            className={classnames(
              styles.statisticInformation,
              "text-align font-weight-light mt-5"
            )}
          >
            Na wybrany dzień pozostało
            <span className="font-weight-bold">{freeDesks}</span> wolnych
            biurek.
          </div>
        </>
      ) : (
        <p
          className={classnames(
            styles.statisticInformation,
            "text-align font-weight-light"
          )}
        >
          Dziś wszyscy pracują w domu, biuro jest puste
        </p>
      )}
    </div>
  );
};

export default Statistics;
