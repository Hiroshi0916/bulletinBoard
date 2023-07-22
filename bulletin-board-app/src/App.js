import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import ThreadList from "./components/ThreadList.js";
import ThreadCreate from "./components/ThreadCreate.js";
import { ThreadContext } from "./components/ThreadContext.js";
import ThreadDetail from "./components/ThreadDetail.js";

// App component
const App = () => {
  const [threads, setThreads] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=0"
      // "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=20"
      // "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=30"
    )
      .then((response) => response.json())
      .then((data) => setThreads(data))
      .catch((error) => console.error(error));
  }, []); // 空の依存配列を渡すことで、この効果はコンポーネントのマウント時に一度だけ実行されます

  return (
    <Router>
      <NavBar />
      <ThreadContext.Provider
        value={{ threads, setThreads, comments, setComments }}
      >
        <Routes>
          <Route exact path="/" element={<ThreadList />} />
          <Route path="/thread/new" element={<ThreadCreate />} />
          <Route path="/thread/:id" element={<ThreadDetail />} />
        </Routes>
      </ThreadContext.Provider>
    </Router>
  );
};

export default App;
