import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./ThreadCreate.css";
import { ThreadContext } from "./ThreadContext.js";

const ThreadCreate = () => {
  const { threads, setThreads } = useContext(ThreadContext);
  const [text, setText] = useState("");

  const handleCreate = () => {
    if (text.trim() !== "") {
      setThreads([...threads, text]);
      setText("");
    }
  };

  return (
    <div className="thread-create-container">
      <div className="title-threads">スレッド新規作成</div>
      <input
        className="text-input"
        type="text"
        value={text}
        placeholder="スレッドタイトル"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="button-wrapper">
        <div className="button-container">
          <Link to="/" className="link-button">
            TOPに戻る
          </Link>
          <button onClick={handleCreate} className="create-button">
            作成
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadCreate;
