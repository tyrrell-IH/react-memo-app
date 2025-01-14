import AddMemo from "./add_memo";
import "./title_list.css";

export default function TitleList({ editingMemo, setEditingMemo, allMemos }) {
  const titles = allMemos.map((memo) => {
    const memoTitle = memo.body.split("\n")[0].trim() || "Non Title";
    if (editingMemo !== null && memo.id === editingMemo.id) {
      return <li key={memo.id}>{memoTitle}</li>;
    } else {
      return (
        <li key={memo.id}>
          <span
            className="unselected-list"
            onClick={() => {
              setEditingMemo(memo);
            }}
          >
            {memoTitle}
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
