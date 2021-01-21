import React from "react";
import { IDay } from "../../API/types";

export interface ITimeTableProps {
  date: IDay;
  completed: () => void;
}

const TimeTable: React.FC<ITimeTableProps> = ({ date, completed }) => {
  return (
    <>
    <li>
      {date.date}
      {date.description}
      {date.user}

    </li>
    <button onClick={completed}>Completed</button>
    </>
  );
};

export default TimeTable;
