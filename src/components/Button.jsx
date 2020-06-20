import React from "react";

const Button = ({ title, onClick }) => {
  return (
    <button onClick={onClick} className="custom-button">
      {title}
    </button>
  );
};

export default Button;
