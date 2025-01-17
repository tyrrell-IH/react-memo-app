import { useContext } from "react";
import AddMemo from "./add_memo";
import "../css/title_list.css";
import { IsLoginContext } from "../context/login_context";

export default function TitleList({ selectedMemo, setSelectedMemo, allMemos }) {
  const isLogin = useContext(IsLoginContext);

  const titles = allMemos.map((memo) => {
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
    <ul className="title-list">
      {titles}
      {isLogin && (
        <AddMemo setSelectedMemo={setSelectedMemo} allMemos={allMemos} />
      )}
    </ul>
  );
}
