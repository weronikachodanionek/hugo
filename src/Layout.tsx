import React from "react";

import styles from "./Layout.module.scss";
import { Company } from "./pages";

const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>      
      <Company />
    </div>
  );
};

export default Layout;
