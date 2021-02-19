import React, { useState, createContext, useContext, useEffect } from "react";
import { getAllPlaces } from "../API/fakeAPI";
import { IDay } from "../API/types";
import { IUser } from "../components/Users/UsersList";

interface IDataContext {
  data: IDay[];
  users: IUser[]
}

interface IDataActionsContext {
  setData: React.Dispatch<React.SetStateAction<IDay[]>>;
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
}

const DataContext = createContext<IDataContext>({} as IDataContext);
const DataActionsContext = createContext<IDataActionsContext>(
  {} as IDataActionsContext
);

export const useDataContext = () => useContext(DataContext);
export const useDataActionsContext = () => useContext(DataActionsContext);

export const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IDay[]>([] as IDay[]);
  const [users, setUsers] = useState<IUser[]>([] as IUser[]);

  useEffect(() => {
    getAllPlaces().then(
      (days) => {
        setData(days);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <DataContext.Provider value={{ data, users }}>
      <DataActionsContext.Provider value={{setData, setUsers}}>
        {children}
      </DataActionsContext.Provider>
    </DataContext.Provider>
  );
};
