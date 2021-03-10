import React, { useState, createContext, useContext } from "react";

interface IModalContext {
  modalReservation: boolean | any;
}

interface IModalActionsContext {
  setModalReservation: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);
const ModalActionsContext = createContext<IModalActionsContext>(
  {} as IModalActionsContext
);

export const useModaleContext = () => useContext(ModalContext);
export const useModalActionsContext = () => useContext(ModalActionsContext);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modalReservation, setModalReservation] = useState<boolean>();

  return (
    <ModalContext.Provider value={{ modalReservation }}>
      <ModalActionsContext.Provider value={{ setModalReservation }}>
        {children}
      </ModalActionsContext.Provider>
    </ModalContext.Provider>
  );
};
