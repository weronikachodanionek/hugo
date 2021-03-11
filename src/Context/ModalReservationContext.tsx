import React, { useState, createContext, useContext } from "react";

interface IModalContext {
  modalReservation: boolean | any;
  tooltip: boolean | undefined;
}

interface IModalActionsContext {
  setModalReservation: React.Dispatch<
    React.SetStateAction<boolean | undefined>
  >;
  setTooltip: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const ModalContext = createContext<IModalContext>({} as IModalContext);
const ModalActionsContext = createContext<IModalActionsContext>(
  {} as IModalActionsContext
);

export const useModaleContext = () => useContext(ModalContext);
export const useModalActionsContext = () => useContext(ModalActionsContext);

export const ModalContextProvider: React.FC = ({ children }) => {
  const [modalReservation, setModalReservation] = useState<boolean>();
  const [tooltip, setTooltip] = useState<boolean>();

  return (
    <ModalContext.Provider value={{ modalReservation, tooltip }}>
      <ModalActionsContext.Provider value={{ setModalReservation, setTooltip }}>
        {children}
      </ModalActionsContext.Provider>
    </ModalContext.Provider>
  );
};
