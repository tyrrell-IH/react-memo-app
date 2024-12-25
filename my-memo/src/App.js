import { useState } from "react";
import Sidebar from "./sidebar";
import Editor from "./editor";

export default function App() {
  const [editingMemo, setEditingMemo] = useState(null);
  return (
    <div>
      {editingMemo === null ? "一覧" : "編集"}
      <Sidebar
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
  );
}
