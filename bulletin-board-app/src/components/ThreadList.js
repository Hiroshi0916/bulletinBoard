import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ThreadList.css"; // CSSのインポート
import { ThreadContext } from "./ThreadContext.js";
// https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=20

const ThreadList = () => {
  const { threads } = useContext(ThreadContext);

  return (
    <div>
      <div className="list-title">新着スレッド</div>
      <table className="table">
        <tbody>
          {threads.map((thread) => (
            // <tr key={index}>
            <tr key={thread.id}>
              <td>
                {/* <Link to={`/thread/${index}`} className="link-style"> */}
                <Link to={`/thread/${thread.id}`} className="link-style">
                  {/* {thread} */}
                  {thread.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ThreadList;
