import { useState } from "react";
import TitleList from "./title_list";
import Editor from "./editor";
import LoginButton from "./login_button";
import { IsLoginContext } from "./login_context";
import "./App.css";

export default function App() {
  const [selectedMemo, setSelectedMemo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  const allMemos = JSON.parse(localStorage.getItem("memos")) ?? [];

  return (
    <IsLoginContext.Provider value={isLogin}>
      <div className="memo-app">
        {isLogin && selectedMemo !== null ? "編集" : "一覧"}
        {isLogin ? "ログイン済" : "未ログイン"}
        <div className="memo-contents">
          <LoginButton setIsLogin={setIsLogin} />
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
    </IsLoginContext.Provider>
  );
}
