import React from "react";

const Input = ({ type, name, value, placeholder, error, errorMessage }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        className="custom-input"
        placeholder={placeholder}
      />
      {error && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
