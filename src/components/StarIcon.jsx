import React from "react";
import { ReactComponent as Star } from "../assets/star.svg";

const StarIcon = ({ active, onClick }) => {
  return (
    <Star
      className={`star-icon`}
      fill={active ? "orange" : "none"}
      onClick={onClick}
      stroke="rgb(182, 184, 198)"
    />
  );
};

export default StarIcon;
