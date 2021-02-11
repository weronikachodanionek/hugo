import React from "react";

import Select, { components, IndicatorProps } from "react-select";

import { SelectComponentsProps } from "react-select/src/Select";

import { ISelectOptions } from "../../Reservation/Options";
import "./InputSelect.scss";

export interface ISelectInputProps extends SelectComponentsProps {
  label: string;
  options: ISelectOptions[];
  className?: string;
  placeholder: string;
  inputId: string;
}


const DropdownIndicator = (props: any): JSX.Element => {
  return (
    <components.DropdownIndicator {...props}>
      <i className="bi bi-chevron-compact-down input-icon-arrow"></i>
    </components.DropdownIndicator>
  );
};



const InputSelect: React.FC<ISelectInputProps> = ({
  label,
  options,
  placeholder,
  className,
  inputId,
  ...props
}) => {
  return (
    <>
      <div className="form-group w-100">
        <label htmlFor={inputId} className="input-label">
          {label}
        </label>
        <Select
          label={label}
          placeholder={placeholder}
          options={options}
          inputId={inputId}
          classNamePrefix="react-select-custom"
          className="react-select-container"
          components={{ DropdownIndicator }}
          {...props}
        />

      </div>
    </>
  );
};

export default InputSelect;
