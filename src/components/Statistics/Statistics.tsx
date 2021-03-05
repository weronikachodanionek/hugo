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
  const {
    setCollapseReservation,
    setVisibileButton,
  } = useCollapseActionsContext();

  const handleOpenReservation = () => {
    setCollapseReservation(true);
    setVisibileButton(false);
    window.scroll({
      top: 660,
      left: 0,
      behavior: "smooth",
    });
  };

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
    <div className="d-flex flex-column justify-content-center align-items-center bg-gray pb-5">
      {workOffice > 0 ? (
        <>
          <div className="d-flex justify-content-center align-items-center">
            <PieChart
              paddingAngle={0}
              className="col-5"
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
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
            <div className="d-flex flex-column">
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
            Na wybrany dzień pozostało{" "}
            <span className="font-weight-bold">{freeDesks}</span> wolnych
            biurek.{" "}
            <span
              className="font-weight-bold"
              onClick={() => handleOpenReservation()}
            >
              Zarezeruj
            </span>{" "}
            jedno z nich
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
