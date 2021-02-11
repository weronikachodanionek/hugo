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
          "w-100 position-relative d-flex justify-content-center align-items-center pb-5"
        )}
      >
        <div className={classnames(styles.headerUser, "position-absolute col-3")}>
        <UserInformation />
        </div>
      </div>
    </>
  );
};

export default Header;
