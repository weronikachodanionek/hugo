import React, { useState, createContext, useContext } from "react";

interface IReservationContext {
  room: string | undefined;
}

interface IReservationActionsContext {
  setRoom: React.Dispatch<React.SetStateAction<string | undefined>>;
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

  const blabla = () => console.log("działa")

  return (
    <ReservationContext.Provider value={{ room }}>
      <ReservationActionsContext.Provider value={{ setRoom, blabla }}>
        {children}
      </ReservationActionsContext.Provider>
    </ReservationContext.Provider>
  );
};
