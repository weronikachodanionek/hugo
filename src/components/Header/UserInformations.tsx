import React, { useState } from "react";
import classnames from "classnames";

import styles from "./UserInformations.module.scss";
import InputText from "../common/Inputs/TextInput";
import useLocalStorage from "../../Hooks/useLocalStorage";

const UserInformation: React.FC = () => {
  const [showUserPanel, setUserPanelShow] = useState<Boolean>(false);
  const [name, setName] = useLocalStorage("", "");
  const [password, setPassword] = useLocalStorage("", "");

  return (
    <>
      <div
        className={classnames("text-white")}
        onClick={() => setUserPanelShow(!showUserPanel)}
      >
        Panel użytkownika <i className="bi bi-cone-striped text-white"></i>
      </div>

      {showUserPanel === true && (
        <div className="bg-gray pb-5">
          <div className="d-flex flex justify-content-center align-items-center pt-3">
            <img
              alt=""
              className={styles.userImage}
              src="https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            />
       
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center px-4">
            <InputText
              name="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              label="Wpisz swoje imię"
              inputId="nameId"
              placeholder="Podaj imię"
              classNameGroup="justify-content-center align-items-center w-100"
            ></InputText>

            <InputText
              name="Name"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Wpisz hasło"
              inputId="nameId"
              type="password"
              placeholder="****"
              //className={classnames(styles.inputName, "")}
              classNameGroup="justify-content-center align-items-center w-100"
            ></InputText>
          </div>
          {/* <p>{name}</p>
          <p>{password}</p> */}
        </div>
      )}
    </>
  );
};

export default UserInformation;
