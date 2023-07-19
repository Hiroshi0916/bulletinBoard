import React, { createContext } from "react";

export const ThreadContext = createContext({
  threads: [],
  comments: [],
  setThreads: () => {},
  setComments: () => {},
});
