import "./editor.css";

export default function Editor({ editingMemo, setEditingMemo, allMemos }) {
  function handleEdit() {
    const newMemos = allMemos.map((memo) => {
      if (memo.id === editingMemo.id) {
        const title = editingMemo.body.split("\n")[0].trim();
        return { ...memo, title: title, body: editingMemo.body };
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
        className="text-area"
        placeholder="Enter your text"
        value={editingMemo.body}
        onChange={(e) =>
          setEditingMemo({ ...editingMemo, body: e.target.value })
        }
        rows={8}
        cols={40}
      />
      <div className="button-area">
        <button className="button" onClick={handleEdit}>
          編集
        </button>
        <button className="button" onClick={handleDelete}>
          削除
        </button>
      </div>
    </div>
  );
}
