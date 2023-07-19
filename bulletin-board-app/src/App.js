import React, { useState } from "react";
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
  return (
    <Router>
      <NavBar />
      <ThreadContext.Provider
        value={{ threads, setThreads, comments, setComments }}
      >
        <Routes>
          <Route exact path="/" element={<ThreadList />} />
          <Route path="/create" element={<ThreadCreate />} />
          <Route path="/thread/:id" element={<ThreadDetail />} />
        </Routes>
      </ThreadContext.Provider>
    </Router>
  );
};

export default App;
