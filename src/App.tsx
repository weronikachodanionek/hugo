import React from "react";

import styles from "./App.scss";
import "../src/assets/styles/index.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";
import { Calender, Header, Reservation } from "./components";
import { DataContextProvider } from "./Context/DataContext";

const App: React.FC = () => {
  return (
    <ReservationContextProvider>
      <DataContextProvider>
        <div className={styles.app}>
          <Header />

          <Reservation />
          <Calender />
        </div>
      </DataContextProvider>
    </ReservationContextProvider>
  );
};

export default App;
