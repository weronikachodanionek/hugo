import React, { useState } from "react";
import classnames from "classnames";

import styles from "./Point.module.scss";

interface IPointProps {
  className: string;
}

const Point: React.FC<IPointProps> = ({ className, children, ...props }) => {
  const [showTooltip, setShowTooltip] = useState<Boolean>(false);

  return (
    <div
      className={classnames(
        "d-flex justify-content-center align-items-center position-relative"
      )}
    >
      <i
        onClick={() => setShowTooltip(!showTooltip)}
        className={classnames(
          styles.point,
          className,
          "bi bi-circle-fill"
        )}
        {...props}
      ></i>

      {showTooltip && (
        <div
          className={classnames(
            "d-flex justify-content-center align-items-center position-absolute",
            styles.pointTooltip
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Point;
