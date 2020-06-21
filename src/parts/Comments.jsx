import React, { useContext } from "react";
import { StateContext } from "../App";
import Comment from "./Comment";

const Comments = () => {
  const state = useContext(StateContext);
  const comments = state.comments.reverse();

  return (
    <div className="comments">
      {comments.map((comment) => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </div>
  );
};

export default Comments;
