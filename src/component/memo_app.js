import Header from "./header";
import TitleList from "./title_list";
import Editor from "./editor";
import LoginButton from "./login_button";
import { IsLoginProvider } from "../context/is_login_hooks";
import { MemosProvider } from "../context/memos_hooks";
import { useSelectedMemo } from "../context/selected_memo_hooks";
import "../css/memo_app.css";

export default function MemoApp() {
  const { selectedMemo } = useSelectedMemo();

  return (
    <IsLoginProvider>
      <div className="memo-app">
        <Header />
        <div className="memo-contents">
          <div className="memo-contents-header">
            <LoginButton />
          </div>
          <MemosProvider>
            <div className="memo-contents-body">
              <TitleList />
              {selectedMemo !== null && <Editor />}
            </div>
          </MemosProvider>
        </div>
      </div>
    </IsLoginProvider>
  );
}
