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
  placeholder: string;
}

const InputText: React.FC<IInputProps> = ({
  inputId,
  label,
  type,
  name,
  value,
  placeholder,
  className,
  ...props
}) => {
  return (
    <>
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
          placeholder={placeholder}
          className={classnames(styles.inputText, className)}
          {...props}
        />
      </div>
    </>
  );
};

export default InputText;
