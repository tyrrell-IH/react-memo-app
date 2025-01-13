import AddMemo from "./add_memo";
import "./title_list.css";

export default function TitleList({ editingMemo, setEditingMemo, allMemos }) {
  const titles = allMemos.map((memo) => {
    if (editingMemo !== null && memo.id === editingMemo.id) {
      return <li key={memo.id}>{memo.title}</li>;
    } else {
      return (
        <li key={memo.id}>
          <span
            className="unselected-list"
            onClick={() => {
              setEditingMemo(memo);
            }}
          >
            {memo.title}
          </span>
        </li>
      );
    }
  });

  return (
    <ul className="title-list">
      {titles}
      <AddMemo setEditingMemo={setEditingMemo} allMemos={allMemos} />
    </ul>
  );
}
