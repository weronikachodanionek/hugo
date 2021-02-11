import React, { useState } from "react";
import "../src/assets/styles/index.scss";

import Company from "./Company";
import Reservation from "./components/Reservation/Reservation";
import useLocalStorage from "./Hooks/useLocalStorage";
//import { observer } from "mobx-react";

import styles from "./App.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";

//@observer
const App: React.FC = () => {
  const [name, setName] = useLocalStorage<string | any>(
    "name",
    "Juliusz Cezar"
  );

  return (
    <ReservationContextProvider>
      <div className={styles.app}>
        <h1>Witaj, {name}</h1>
        {/* <Reservation showModal={() => setShowModal(true)} /> */}
        <Reservation />
        {/* <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div> */}
        <Company />
      </div>
    </ReservationContextProvider>
  );
};

export default App;
