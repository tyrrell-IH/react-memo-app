import { v4 as uuid } from "uuid";

export default function AddMemo({ changeEditMode, setEditingMemo }) {
  function handleClick() {
    const memos = JSON.parse(localStorage.getItem("memos")) ?? [];
    const newMemo = { id: uuid(), body: "新規登録" };
    memos.push(newMemo);
    localStorage.setItem("memos", JSON.stringify(memos));
    changeEditMode();
    setEditingMemo(newMemo);
  }
  return (
    <li>
      <a href="#" onClick={handleClick} style={{ textDecoration: "none" }}>
        +
      </a>
    </li>
  );
}
