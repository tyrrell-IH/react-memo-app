import AddMemo from "./add_memo";
import { useIsLogin } from "../hooks/is_login_hooks";
import { useSelectedMemo } from "../hooks/selected_memo_hooks";
import { useMemos } from "../hooks/memos_hooks";
import "../css/title_list.css";

export default function TitleList() {
  const { isLogin } = useIsLogin();
  const { selectedMemo, setSelectedMemo } = useSelectedMemo();
  const { memos } = useMemos();

  const titles = memos.map((memo) => {
    const memoTitle = memo.body.split("\n")[0].trim() || "Non Title";
    if (selectedMemo !== null && memo.id === selectedMemo.id) {
      return <li key={memo.id}>{memoTitle}</li>;
    } else {
      return (
        <li key={memo.id}>
          <span
            className="unselected-list"
            onClick={() => {
              setSelectedMemo(memo);
            }}
          >
            {memoTitle}
          </span>
        </li>
      );
    }
  });

  return (
    <div>
      <ul className="title-list">{titles}</ul>
      {isLogin && <AddMemo />}
    </div>
  );
}
