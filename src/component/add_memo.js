import { useMemos } from "../hooks/memos_hooks";
import "../css/add_memo.css";

export default function AddMemo() {
  const { addMemo } = useMemos();

  function handleClick() {
    addMemo();
  }

  return (
    <li>
      <span className="add-memo" onClick={handleClick}>
        +
      </span>
    </li>
  );
}
