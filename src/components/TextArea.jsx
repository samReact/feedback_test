import React from "react";

const TextArea = ({ placeholder, name, onChange, value }) => {
  return (
    <textarea
      name={name}
      cols="20"
      rows="8"
      placeholder={placeholder}
      className="custom-textarea"
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

export default TextArea;
