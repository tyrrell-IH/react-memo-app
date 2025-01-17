import { useState } from "react";
import Header from "./header";
import TitleList from "./title_list";
import Editor from "./editor";
import LoginButton from "./login_button";
import { IsLoginContext } from "../context/is_login_context";
import "../css/memo_app.css";

export default function MemoApp() {
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const allMemos = JSON.parse(localStorage.getItem("memos")) ?? [];

  return (
    <IsLoginContext.Provider value={isLogin}>
      <div className="memo-app">
        <Header />
        <div className="memo-contents">
          <div className="memo-contents-header">
            <LoginButton setIsLogin={setIsLogin} />
          </div>
          <div className="memo-contents-body">
            <TitleList
              selectedMemo={selectedMemo}
              setSelectedMemo={(memo) => setSelectedMemo(memo)}
              allMemos={allMemos}
            />
            {selectedMemo !== null && (
              <Editor
                selectedMemo={selectedMemo}
                setSelectedMemo={(memo) => setSelectedMemo(memo)}
                allMemos={allMemos}
              />
            )}
          </div>
        </div>
      </div>
    </IsLoginContext.Provider>
  );
}
