import React, { Fragment } from "react";

const TextArea = ({
  placeholder,
  name,
  onChange,
  value,
  onBlur,
  onFocus,
  error,
  errorMessage,
}) => {
  return (
    <Fragment>
      <textarea
        name={name}
        cols="20"
        rows="8"
        placeholder={placeholder}
        className={`custom-textarea ${error ? "error" : undefined}`}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
      />
      {error && <p className="errormessage">{errorMessage}</p>}
    </Fragment>
  );
};

export default TextArea;
