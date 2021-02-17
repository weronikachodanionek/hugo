import React, { useState, createContext, useContext, useEffect } from "react";
import { getAllPlaces } from "../API/fakeAPI";
import { IDay } from "../API/types";

interface IDataContext {
  data: IDay[];
}

interface IDataActionsContext {
  setData: React.Dispatch<React.SetStateAction<IDay[]>>;
}

const DataContext = createContext<IDataContext>({} as IDataContext);
const DataActionsContext = createContext<IDataActionsContext>(
  {} as IDataActionsContext
);

export const useDataContext = () => useContext(DataContext);
export const useDataActionsContext = () => useContext(DataActionsContext);

export const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IDay[]>([] as IDay[]);

  useEffect(() => {
    getAllPlaces().then(
      (days) => {
        setData(days);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <DataContext.Provider value={{ data }}>
      <DataActionsContext.Provider value={{setData}}>
        {children}
      </DataActionsContext.Provider>
    </DataContext.Provider>
  );
};
