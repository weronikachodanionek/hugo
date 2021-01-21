import React from "react";

import styles from "./Reservation.module.scss";

interface IReservation {
  id: string;
}

const Room: React.FC<IReservation> = ({ id }) => {
  return (
    <div className={styles.rooms}>
      <h1>Zarezerwuj</h1>
    </div>
  );
};

export default Room;
