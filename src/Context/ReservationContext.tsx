import React, { useState, createContext, useContext } from "react";

interface IReservationContext {
  room: string | undefined;
  day: number | undefined;
}

interface IReservationActionsContext {
  setRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
  setDay: React.Dispatch<React.SetStateAction<number | undefined>>;
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
  const [day, setDay] = useState<number>();


  const blabla = () => console.log("działa");

  return (
    <ReservationContext.Provider value={{ room, day }}>
      <ReservationActionsContext.Provider value={{ setRoom, blabla, setDay }}>
        {children}
      </ReservationActionsContext.Provider>
    </ReservationContext.Provider>
  );
};
