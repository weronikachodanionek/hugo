import React, { useState } from "react";
import classnames from "classnames";

import styles from "./UserInformations.module.scss";

const UserInformation: React.FC = () => {
  const [showUserPanel, setUserPanelShow] = useState<Boolean>(false);

  return (
    <>
      <div
        className={classnames("text-white")}
        onClick={() => setUserPanelShow(!showUserPanel)}
      >
        Panel użytkownika <i className="bi bi-cone-striped text-white ml-3"></i>
      </div>

      {showUserPanel === true && (
       
        <>
            <div className="bg-gray d-flex flex justify-content-center align-items-center px-4 py-4 mt-4">
            <img
              alt=""
              className={styles.userImage}
              src="https://images.unsplash.com/photo-1577023311546-cdc07a8454d9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            />
            <h4 className="ml-5">Imię i Nazwisko</h4>
           
          </div>
        </>
      )}
    </>
  );
};

export default UserInformation;
