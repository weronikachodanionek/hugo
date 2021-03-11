import React from "react";
import moment from "moment";
import { ModalProvider } from "react-modal-hook";

import styles from "./App.module.scss";
import "../src/assets/styles/index.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";
import { Calender, Header } from "./components";
import { DataContextProvider } from "./Context/DataContext";
import ModRes from "./components/Reservation/Modal";

moment.locale("pl");

const App: React.FC = () => {
  return (
    <ReservationContextProvider>
      <DataContextProvider>
          <ModalProvider>
            <div className={styles.app}>
              <Header />
              <ModRes />
              <Calender />
            </div>
          </ModalProvider>
      </DataContextProvider>
    </ReservationContextProvider>
  );
};

export default App;
