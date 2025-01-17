import { v4 as uuid } from "uuid";
import "./add_memo.css";

export default function AddMemo({ setSelectedMemo, allMemos }) {
  function handleClick() {
    const newMemo = { id: uuid(), body: "" };
    const newMemos = [...allMemos, newMemo];
    localStorage.setItem("memos", JSON.stringify(newMemos));
    setSelectedMemo(newMemo);
  }

  return (
    <li>
      <span className="add-memo" onClick={handleClick}>
        +
      </span>
    </li>
  );
}
