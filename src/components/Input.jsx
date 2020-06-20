import React from "react";

const Input = ({
  type,
  name,
  value,
  placeholder,
  error,
  errorMessage,
  onChange,
  onBlur,
  onFocus,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        className={`input ${error ? "error" : undefined}`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {error && <p className="errormessage">{errorMessage}</p>}
    </div>
  );
};

export default Input;
