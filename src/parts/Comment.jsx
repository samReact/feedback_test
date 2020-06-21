import React from "react";

import StarGroup from "./StarGroup";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <div className="text-medium">
        <StarGroup size={14} rate={comment.rate} />
        {comment.name}
      </div>
      <p data-testid="comment">{comment.comment}</p>
      <span className="date">
        Posted by {comment.email} on {comment.date}
      </span>
    </div>
  );
};

export default Comment;
