import React from "react";
import classnames from "classnames";

import styles from "./Point.module.scss";

interface IPointProps {
  className: string;
}

const Point: React.FC<IPointProps> = ({ className, children, ...props }) => {
  return (
    <div className={classnames("d-flex align-items-center")}>
      <div className={classnames(styles.point, className)} {...props}></div>
      {children}
    </div>
  );
};

export default Point;
