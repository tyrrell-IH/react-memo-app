import { v4 as uuid } from "uuid";
import "./add_memo.css";

export default function AddMemo({ setEditingMemo, allMemos }) {
  function handleClick() {
    const newMemo = { id: uuid(), title: "", body: "" };
    const newMemos = [...allMemos, newMemo];
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setEditingMemo(newMemo);
  }

  return (
    <li>
      <span className="add-memo" onClick={handleClick}>
        +
      </span>
    </li>
  );
}
