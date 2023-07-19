import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ThreadDetail.css"; // CSSのインポート
import { ThreadContext } from "./ThreadContext.js";

const ThreadDetail = () => {
  const { threads, comments, setComments } = useContext(ThreadContext);
  const { id } = useParams();

  const [newComment, setNewComment] = useState("");
  const selectedThread = threads[id];

  const handleCommentSubmit = () => {
    setComments((prevComments) => ({
      ...prevComments,
      [id]: [...(prevComments[id] || []), newComment],
    }));
    setNewComment("");
  };

  return (
    <div className="thread-container">
      <div className="thread-contents">
        <div className="thread-detail-title">TechTrainってどうなの？</div>
        {(comments[id] || []).map((comment, index) => (
          <p key={index} className="comment">
            {comment}
          </p>
        ))}
      </div>

      <div className="posting">
        <textarea
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="comment-input"
          placeholder="投稿しよう!"
        />
        <button onClick={handleCommentSubmit} className="submit-button">
          投稿
        </button>
      </div>
    </div>
  );
};

export default ThreadDetail;
