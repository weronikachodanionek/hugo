import React, { useState, createContext, useContext, useEffect } from "react";
import { IUser } from "src/API/mocks/users";
import { getAllPlaces, getAllUsers, getUsersForSelect } from "../API/fakeAPI";
import { IDailyUsers } from "../API/mocks/usersPerDay";
import { IDay } from "../API/types";

interface IDataContext {
  data: IDay[];
  users: IDailyUsers[];
  selectUsers: IUser[];
}

interface IDataActionsContext {
  setData: React.Dispatch<React.SetStateAction<IDay[]>>;
  setUsers: React.Dispatch<React.SetStateAction<IDailyUsers[]>>;
  setSelectUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
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
  const [selectUsers, setSelectUsers] = useState<IUser[]>([] as IUser[]);

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

  useEffect(() => {
    getUsersForSelect().then(
      (users) => {
        setSelectUsers(users);
      },
      (error) => console.log(error)
    );
  }, []);

  return (
    <DataContext.Provider value={{ data, users, selectUsers }}>
      <DataActionsContext.Provider value={{ setData, setUsers, setSelectUsers }}>
        {children}
      </DataActionsContext.Provider>
    </DataContext.Provider>
  );
};
