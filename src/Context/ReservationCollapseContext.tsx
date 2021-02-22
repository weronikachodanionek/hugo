import React, { useState, createContext, useContext } from "react";

interface ICollapseContext {
  collapseReservation: boolean | undefined;
}

interface ICollapseActionsContext {
  setCollapseReservation: React.Dispatch<React.SetStateAction<boolean | undefined>>;
}

const CollapseContext = createContext<ICollapseContext>({} as ICollapseContext);
const CollapseActionsContext = createContext<ICollapseActionsContext>(
  {} as ICollapseActionsContext
);

export const useCollapseContext = () => useContext(CollapseContext);
export const useCollapseActionsContext = () =>
  useContext(CollapseActionsContext);

export const CollapseContextProvider: React.FC = ({ children }) => {
  const [collapseReservation, setCollapseReservation] = useState<boolean>();

  return (
    <CollapseContext.Provider value={{ collapseReservation }}>
      <CollapseActionsContext.Provider value={{ setCollapseReservation }}>
        {children}
      </CollapseActionsContext.Provider>
    </CollapseContext.Provider>
  );
};
