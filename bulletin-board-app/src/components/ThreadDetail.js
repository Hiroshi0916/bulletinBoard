import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./ThreadDetail.css"; // CSSのインポート
import { ThreadContext } from "./ThreadContext.js";

const ThreadDetail = () => {
  const { threads } = useContext(ThreadContext);
  const { id } = useParams();

  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const selectedThread = threads[id];

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(
          `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts?offset=0`
        );
        const data = await res.json();
        setComments(data.posts);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments(); // コメントを取得
  }, [id]); // idが変わるたびにコメントを再取得

  const handleCommentSubmit = async () => {
    if (!newComment.trim()) return;

    try {
      const res = await fetch(
        `https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads/${id}/posts`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ post: newComment }), // 送信するコメントのデータ
        }
      );

      if (!res.ok) {
        throw new Error("Comment post failed");
      }

      setComments((prevComments) => [...prevComments, { post: newComment }]);

      // 入力フィールドをクリア
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  return (
    <div className="thread-container">
      <div className="thread-contents">
        <div className="thread-detail-title">TechTrainってどうなの？</div>
        {comments.map((comment, index) => (
          <p key={index} className="comment">
            {comment.post}
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
