import { useState } from "react";
import TitleIndex from "./title_index";
import Editor from "./editor";

export default function App() {
  const [editingMemo, setEditingMemo] = useState(null);
  return (
    <div>
      {editingMemo === null ? "一覧" : "編集"}
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
  );
}
