import { useContext } from "react";
import "./editor.css";
import { IsLoginContext } from "./login_context";

export default function Editor({ selectedMemo, setSelectedMemo, allMemos }) {
  const isLogin = useContext(IsLoginContext);

  function handleEdit() {
    const newMemos = allMemos.map((memo) => {
      if (memo.id === selectedMemo.id) {
        return { ...memo, body: selectedMemo.body };
      } else {
        return memo;
      }
    });
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setSelectedMemo(null);
  }

  function handleDelete() {
    const newMemos = allMemos.filter((memo) => memo.id !== selectedMemo.id);
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setSelectedMemo(null);
  }

  return (
    <div className="editor">
      <textarea
        readOnly={!isLogin}
        className="text-area"
        placeholder={isLogin && "Enter your text"}
        value={selectedMemo.body}
        onChange={(e) =>
          setSelectedMemo({ ...selectedMemo, body: e.target.value })
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
