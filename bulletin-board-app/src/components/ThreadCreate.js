import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ThreadCreate.css";
import { ThreadContext } from "./ThreadContext.js";

const ThreadCreate = () => {
  const { threads, setThreads } = useContext(ThreadContext);
  const [text, setText] = useState("");
  const history = useNavigate();

  const handleCreate = () => {
    if (text.trim() !== "") {
      fetch(
        "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: text }),
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // 成功した場合、新しいスレッドを追加
          setThreads([...threads, data]);
          setText("");
          history("/");
        })
        .catch((e) => console.error("Something went wrong", e)); // エラーハンドリング
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
