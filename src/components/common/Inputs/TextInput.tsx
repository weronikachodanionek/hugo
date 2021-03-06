import React, { InputHTMLAttributes } from "react";
import classnames from "classnames";

import styles from "./TextInput.module.scss";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputId: string;
  type?: string;
  label: string;
  name: string;
  value: any;
  className?: string;
  classNameGroup?: string;
  placeholder: string;
  ref?: any;
}

const InputText: React.FC<IInputProps> = ({
  inputId,
  label,
  type,
  name,
  value,
  placeholder,
  className,
  ref,
  classNameGroup,
  ...props
}) => {
  return (
    <div className={classNameGroup}>
      <div
        className={classnames(
          "form-group w-100 d-flex flex-column"
        )}
      >
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
        <input
          id={inputId}
          type={type}
          name={name}
          value={value}
          ref={ref}
          placeholder={placeholder}
          className={classnames(styles.inputText, className)}
          {...props}          
        />
      </div>
    </div>
  );
};

export default InputText;
