import React from "react";
import moment from "moment";

import styles from "./App.scss";
import "../src/assets/styles/index.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";
import { Calender, Header, Reservation } from "./components";
import { DataContextProvider } from "./Context/DataContext";
import { CollapseContextProvider } from "./Context/ReservationCollapseContext";

moment.locale("pl");

const App: React.FC = () => {

  return (
    <ReservationContextProvider>
      <DataContextProvider>
        <CollapseContextProvider>
          <div className={styles.app}>
            <Header />
            <Reservation />
            <Calender />
          </div>
        </CollapseContextProvider>
      </DataContextProvider>
    </ReservationContextProvider>
  );
};

export default App;
