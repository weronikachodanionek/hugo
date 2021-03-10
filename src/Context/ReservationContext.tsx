import React, { useState, createContext, useContext } from "react";

interface IReservationContext {
  room: string | undefined;
  desk: string | undefined;
  day: Date;
  user: string | undefined;
  tabDay: Date;
}

interface IReservationActionsContext {
  setRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDesk: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDay: React.Dispatch<React.SetStateAction<Date>>;
  setUser: React.Dispatch<React.SetStateAction<string | undefined>>;
  setTabDay: React.Dispatch<React.SetStateAction<Date>>;
  blabla: () => void;
}

const ReservationContext = createContext<IReservationContext>(
  {} as IReservationContext
);
const ReservationActionsContext = createContext<IReservationActionsContext>(
  {} as IReservationActionsContext
);

export const useReservationContext = () => useContext(ReservationContext);
export const useReservationActionsContext = () =>
  useContext(ReservationActionsContext);

export const ReservationContextProvider: React.FC = ({ children }) => {
  const [room, setRoom] = useState<string>();
  const [desk, setDesk] = useState<string>();
  const [day, setDay] = useState<Date>(new Date());
  const [user, setUser] = useState<string>();
  const [tabDay, setTabDay] = useState<Date>(new Date());

  const blabla = () => console.log("działa");

  return (
    <ReservationContext.Provider value={{ room, desk, day, user, tabDay }}>
      <ReservationActionsContext.Provider
        value={{ setRoom, blabla, setDesk, setDay, setUser, setTabDay }}
      >
        {children}
      </ReservationActionsContext.Provider>
    </ReservationContext.Provider>
  );
};
