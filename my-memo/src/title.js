export default function Title({ editingMemo, setEditingMemo }) {
  const memos = JSON.parse(localStorage.getItem("memos")) ?? [];
  const titles = memos.map((memo) => {
    const title = memo.body.split("\n")[0];
    if (editingMemo !== null && memo.id === editingMemo.id) {
      return <li key={memo.id}>{title}</li>;
    }
    return (
      <li key={memo.id}>
        <a
          href="#"
          onClick={() => {
            setEditingMemo(memo);
          }}
        >
          {title}
        </a>
      </li>
    );
  });

  return <ul style={{ listStyle: "none" }}>{titles}</ul>;
}
