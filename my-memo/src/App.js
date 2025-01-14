import { useState } from "react";
import TitleList from "./title_list";
import Editor from "./editor";
import "./App.css";

export default function App() {
  const [editingMemo, setEditingMemo] = useState(null);
  const allMemos = JSON.parse(localStorage.getItem("memos")) ?? [];

  return (
    <div className="memo-app">
      {editingMemo === null ? "一覧" : "編集"}
      <div className="memo-contents">
        <TitleList
          editingMemo={editingMemo}
          setEditingMemo={(memo) => setEditingMemo(memo)}
          allMemos={allMemos}
        />
        {editingMemo !== null && (
          <Editor
            editingMemo={editingMemo}
            setEditingMemo={(memo) => setEditingMemo(memo)}
            allMemos={allMemos}
          />
        )}
      </div>
    </div>
  );
}
