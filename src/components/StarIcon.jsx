import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";

const StarIcon = ({ active, onClick, size }) => {
  return (
    <Star
      className={`star-icon`}
      fill={active ? "orange" : "none"}
      onClick={onClick}
      stroke="rgb(182, 184, 198)"
      height={size}
      width={size}
    />
  );
};

export default StarIcon;
