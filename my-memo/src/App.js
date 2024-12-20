import { useState } from "react";
import Sidebar from "./sidebar";
import Editor from "./editor";

export default function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingMemo, setEditingMemo] = useState(null);
  return (
    <div>
      <Sidebar
        changeEditMode={() => setIsEditing(true)}
        setEditingMemo={(memo) => setEditingMemo(memo)}
      />
      {isEditing && <Editor editingMemo={editingMemo} />}
    </div>
  );
}
