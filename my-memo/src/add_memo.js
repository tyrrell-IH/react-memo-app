import { v4 as uuid } from "uuid";
import "./add_memo.css";

export default function AddMemo({ setEditingMemo }) {
  function handleClick() {
    const memos = JSON.parse(localStorage.getItem("memos")) ?? [];
    const newMemo = { id: uuid(), body: "新規登録" };
    memos.push(newMemo);
    localStorage.setItem("memos", JSON.stringify(memos));
    setEditingMemo(newMemo);
  }

  return (
    <li>
      <a className="add-memo" href="#" onClick={handleClick}>
        +
      </a>
    </li>
  );
}
