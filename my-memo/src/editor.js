export default function Editor({ editingMemo, setEditingMemo }) {
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
    </form>
  );
}
