import { useIsLogin } from "../hooks/is_login_hooks";
import { useSelectedMemo } from "../hooks/selected_memo_hooks";
import { useMemos } from "../hooks/memos_hooks";
import "../css/editor.css";

export default function Editor() {
  const { isLogin } = useIsLogin();
  const { selectedMemo, setSelectedMemo } = useSelectedMemo();
  const { editMemo, deleteMemo } = useMemos();

  function handleEdit() {
    editMemo();
  }

  function handleDelete() {
    deleteMemo();
  }

  return (
    <div className="editor">
      <textarea
        readOnly={!isLogin}
        className="text-area"
        placeholder={isLogin ? "Enter your text" : ""}
        value={selectedMemo.body}
        onChange={(e) =>
          setSelectedMemo({ ...selectedMemo, body: e.target.value })
        }
        rows={8}
        cols={40}
      />
      {isLogin && (
        <div className="button-area">
          <button className="button" onClick={handleEdit}>
            編集
          </button>
          <button className="button" onClick={handleDelete}>
            削除
          </button>
        </div>
      )}
    </div>
  );
}
