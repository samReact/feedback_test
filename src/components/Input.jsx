import React from "react";

const Input = ({
  type,
  name,
  value,
  placeholder,
  error,
  errorMessage,
  onChange,
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        className="custom-input"
        placeholder={placeholder}
        onChange={onChange}
      />
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
