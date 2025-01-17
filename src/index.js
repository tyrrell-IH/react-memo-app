import React from "react";
import ReactDOM from "react-dom/client";
import MemoApp from "./component/memo_app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MemoApp />
  </React.StrictMode>,
);
