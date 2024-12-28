import { useState } from "react";
import TitleIndex from "./title_index";
import Editor from "./editor";
import "./App.css";

export default function App() {
  const [editingMemo, setEditingMemo] = useState(null);
  return (
    <div className="memo-app">
      {editingMemo === null ? "一覧" : "編集"}
      <div className="memo-contents">
        <TitleIndex
          editingMemo={editingMemo}
          setEditingMemo={(memo) => setEditingMemo(memo)}
        />
        {editingMemo !== null && (
          <Editor
            editingMemo={editingMemo}
            setEditingMemo={(memo) => setEditingMemo(memo)}
          />
        )}
      </div>
    </div>
  );
}
