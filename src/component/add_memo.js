import { useMemos } from "../hooks/memos_hooks";
import "../css/add_memo.css";

export default function AddMemo() {
  const { addMemo } = useMemos();

  function handleClick() {
    addMemo();
  }

  return (
    <div className="add-memo" onClick={handleClick}>
      +
    </div>
  );
}
