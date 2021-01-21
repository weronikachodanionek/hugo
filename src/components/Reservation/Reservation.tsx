import React, { useState } from "react";
import { AvailabilityType, IDesk, IRoom } from "../../API/types";

import styles from "./Reservation.module.scss";
import TimeTable from "./Timetable";

export interface IDeskProps {
  desk: IDesk;
  reservation: IRoom;
}

const Reservation: React.FC<IDeskProps> = ({ desk, reservation }) => {
  const [date, setDate] = useState(desk?.days);
  const [inputDate, setInputDate] = useState("");

  const submitDay = (e: any) => {
    e.preventDefault();
    if (inputDate === "") return alert("Dodaj dzień");
    const newDays = desk?.days?.slice();
    newDays?.splice(0, 0, {
      date: inputDate,
      availability: false,
      description: AvailabilityType.unavailable,
    });
    setDate(newDays);
    setInputDate("");
  };

  const handleBntClick = (e: any) => {
    e.preventDefault();

    const newDays = date.slice();
    return setDate(newDays);
  };

  return (
    <div className={styles.reservation}>
      <>
        <h4>Nazwa biurk: {reservation?.desks[0]?.deskName}</h4>
        <div>
          <h4>Kalendarz</h4>
          {reservation?.desks[0]?.days?.map((day) => (
            <p>{day.date}</p>
          ))}
        </div>

        <form onSubmit={submitDay}>
          <input
            type="text"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
            placeholder="dodaj dzień"
          />
          <button type="submit">Adodaj dizedv</button>
        </form>

        <ul>
          {date?.map((el, index) => (
            <TimeTable completed={()=>handleBntClick} date={el} key={index} />
          ))}
        </ul>
      </>
    </div>
  );
};

export default Reservation;
