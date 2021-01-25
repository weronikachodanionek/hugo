import React from "react";
import classnames from "classnames";

import styles from "./Layout.module.scss";
import { Company } from "./pages";

const Layout: React.FC = () => {
  return (
    <div className={classnames(styles.layout, "bg-gray d-flex justify-content-center align-items-start")}>      
      <Company />
    </div>
  );
};

export default Layout;
