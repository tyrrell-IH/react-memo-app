import React from "react";
import ReactDOM from "react-dom/client";
import MemoApp from "./component/memo_app";
import { SelectedMemoProvider } from "./hooks/selected_memo_hooks";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SelectedMemoProvider>
      <MemoApp />
    </SelectedMemoProvider>
  </React.StrictMode>,
);
