import React from "react";
import { classNames } from "./../../utils/classNames";

interface InputProps {
  label?: string;
  type: string;
  readOnly?: boolean;
  value?: string;
  required?: boolean;
  name?: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  checked?: boolean;
  maxLength?: number;
  errors?: any;
  onInput?: any;
}

export default function InputField({
  label,
  type,
  onChange,
  required,
  value,
  name,
  readOnly,
  checked,
  maxLength,
  placeholder,
  onInput
}: InputProps) {
  return (
    <div
      className={classNames(
        "form-group form-group-default",
        required && "required"
      )}
    >
      <label>{label}</label>
      <input
        autoComplete="off"
        maxLength={maxLength}
        type={type}
        className="form-control text-muted"
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readOnly}
        required={required}
        onChange={onChange}
        checked={checked}
        onInput={onInput}
      />
    </div>
  );
}

interface HookProps {
  label?: string;
  type: string;
  readOnly?: boolean;
  value?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  checked?: boolean;
  maxLength?: number;
  errors?: any;
  register: any;
  validation: any;
}

export function HookInputField({
  label,
  type,
  onChange,
  required,
  value,
  name,
  readOnly,
  checked,
  maxLength,
  placeholder,
  errors,
  register,
  validation,
}: HookProps) {
  const error = errors[name] ? errors[name]?.message : null;
  const regRes = register(name, validation);
  const _onChange = (e: React.SyntheticEvent) => {
    regRes.onChange(e);
    onChange && onChange(e);
  };
  return (
    <div
      className={classNames(
        "form-group form-group-default",
        required && "required"
      )}
    >
      <label>{label}</label>
      {error && <p className="text-danger">{error}</p>}
      <input
        autoComplete="off"
        maxLength={maxLength}
        type={type}
        className={classNames(
          !error && "border-light",
          error && "border border-danger",
          "form-control text-muted"
        )}
        placeholder={placeholder}
        name={name}
        value={value}
        readOnly={readOnly}
        required={required}
        onChange={_onChange}
        checked={checked}
      />
    </div>
  );
}
