import AddMemo from "./add_memo";
import "./title_index.css";

export default function TitleIndex({ editingMemo, setEditingMemo }) {
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

  return (
    <ul className="title-index">
      {titles}
      <AddMemo setEditingMemo={setEditingMemo} />
    </ul>
  );
}
