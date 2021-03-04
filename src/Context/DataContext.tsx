import React, { useState, createContext, useContext, useEffect } from "react";
import { getAllPlaces, getAllUsers } from "../API/fakeAPI";
import { IDailyUsers } from "../API/mocks/usersPerDay";
import { IDay } from "../API/types";

interface IDataContext {
  data: IDay[];
  users: IDailyUsers[];
}

interface IDataActionsContext {
  setData: React.Dispatch<React.SetStateAction<IDay[]>>;
  setUsers: React.Dispatch<React.SetStateAction<IDailyUsers[]>>;
}

const DataContext = createContext<IDataContext>({} as IDataContext);
const DataActionsContext = createContext<IDataActionsContext>(
  {} as IDataActionsContext
);

export const useDataContext = () => useContext(DataContext);
export const useDataActionsContext = () => useContext(DataActionsContext);

export const DataContextProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IDay[]>([] as IDay[]);
  const [users, setUsers] = useState<IDailyUsers[]>([] as IDailyUsers[]);

  useEffect(() => {
    getAllPlaces().then(
      (days) => {
        setData(days);
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    getAllUsers().then(
      (users) => {
        setUsers(users);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <DataContext.Provider value={{ data, users }}>
      <DataActionsContext.Provider value={{ setData, setUsers }}>
        {children}
      </DataActionsContext.Provider>
    </DataContext.Provider>
  );
};
