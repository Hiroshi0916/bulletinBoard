import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./ThreadList.css"; // CSSのインポート
import { ThreadContext } from "./ThreadContext.js";

const ThreadList = () => {
  const { threads } = useContext(ThreadContext);

  return (
    <div>
      <div className="list-title">新着スレッド</div>
      <table className="table">
        <tbody>
          {threads.map((thread, index) => (
            <tr key={index}>
              <td>
                <Link to={`/thread/${index}`} className="link-style">
                  {thread}
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
