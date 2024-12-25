export default function Editor({ setIsEditing, editingMemo, setEditingMemo }) {
  function handleEdit() {
    const memos = JSON.parse(localStorage.getItem("memos"));
    const newMemos = memos.map((memo) => {
      if (memo.id === editingMemo.id) {
        return { ...memo, body: editingMemo.body };
      } else {
        return memo;
      }
    });
    localStorage.setItem("memos", JSON.stringify(newMemos));
  }

  function handleDelete() {
    const memos = JSON.parse(localStorage.getItem("memos"));
    const newMemos = memos.filter((memo) => memo.id !== editingMemo.id);
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setIsEditing(false);
  }

  return (
    <form>
      <label>
        <textarea
          name="yourText"
          placeholder="Enter your text"
          value={editingMemo.body}
          onChange={(e) =>
            setEditingMemo({ ...editingMemo, body: e.target.value })
          }
          rows={8}
          cols={40}
        />
      </label>
      <button onClick={handleEdit}>編集</button>
      <button onClick={handleDelete}>削除</button>
    </form>
  );
}
