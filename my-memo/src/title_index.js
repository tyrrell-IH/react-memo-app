import AddMemo from "./add_memo";
import "./title_index.css";

export default function TitleIndex({ editingMemo, setEditingMemo, allMemos }) {
  const titles = allMemos.map((memo) => {
    if (editingMemo !== null && memo.id === editingMemo.id) {
      return <li key={memo.id}>{memo.title}</li>;
    }
    return (
      <li key={memo.id}>
        <a
          href="#"
          onClick={() => {
            setEditingMemo(memo);
          }}
        >
          {memo.title}
        </a>
      </li>
    );
  });

  return (
    <ul className="title-index">
      {titles}
      <AddMemo setEditingMemo={setEditingMemo} allMemos={allMemos} />
    </ul>
  );
}
