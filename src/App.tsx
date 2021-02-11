import React from "react";

import Company from "./Company";
import useLocalStorage from "./Hooks/useLocalStorage";
//import { observer } from "mobx-react";

import styles from "./App.scss";
import "../src/assets/styles/index.scss";
import { ReservationContextProvider } from "./Context/ReservationContext";
import { Header, Reservation } from "./components";

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
        <Reservation/>

        {/* <Reservation showModal={() => setShowModal(true)} /> */}
       
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
