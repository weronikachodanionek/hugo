import React from "react";

import useLocalStorage from "./Hooks/useLocalStorage";
//import { observer } from "mobx-react";
import { Collapse } from "react-collapse";

import styles from "./App.scss";
import "../src/assets/styles/index.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";
import { Calender, Header, Reservation } from "./components";

//@observer
const App: React.FC = () => {
  const [name, setName] = useLocalStorage<string | any>(
    "name",
    "Juliusz Cezar"
  );

  return (
    <ReservationContextProvider>
      <div className={styles.app}>
        <Header />

        {/* <Reservation showModal={() => setShowModal(true)} /> */}

        {/* <div>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div> */}
        <Reservation />
        <Calender />


      </div>
    </ReservationContextProvider>
  );
};

export default App;
