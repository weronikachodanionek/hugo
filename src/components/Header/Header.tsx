import React from "react";
import classnames from "classnames";

import styles from "./Header.module.scss";
import UserInformation from "./UserInformations";

const Header: React.FC = () => {
  return (
    <>
      <div
        className={classnames(
          styles.header,
          "w-100 d-flex justify-content-end align-items-end pb-5"
        )}
      >
        <div
          className={classnames(
            styles.headerUser,
            ""
          )}
        >
          <UserInformation />
        </div>
      </div>
    </>
  );
};

export default Header;
