import { useContext } from "react";
import "./editor.css";
import { IsLoginContext } from "./login_context";

export default function Editor({ editingMemo, setEditingMemo, allMemos }) {
  const isLogin = useContext(IsLoginContext);

  function handleEdit() {
    const newMemos = allMemos.map((memo) => {
      if (memo.id === editingMemo.id) {
        return { ...memo, body: editingMemo.body };
      } else {
        return memo;
      }
    });
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setEditingMemo(null);
  }

  function handleDelete() {
    const newMemos = allMemos.filter((memo) => memo.id !== editingMemo.id);
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setEditingMemo(null);
  }

  return (
    <div className="editor">
      <textarea
        readOnly={!isLogin}
        className="text-area"
        placeholder={isLogin && "Enter your text"}
        value={editingMemo.body}
        onChange={(e) =>
          setEditingMemo({ ...editingMemo, body: e.target.value })
        }
        rows={8}
        cols={40}
      />
      {isLogin && (
        <div className="button-area">
          <button className="button" onClick={handleEdit}>
            編集
          </button>
          <button className="button" onClick={handleDelete}>
            削除
          </button>
        </div>
      )}
    </div>
  );
}
