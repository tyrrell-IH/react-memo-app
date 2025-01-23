import { v4 as uuid } from "uuid";
import { useState, useContext, createContext, useEffect } from "react";
import { useSelectedMemo } from "./selected_memo_hooks";

const MemosContext = createContext(null);

export function MemosProvider({ children }) {
  const [memos, setMemos] = useState(() => {
    return JSON.parse(localStorage.getItem("memos")) ?? [];
  });
  const { selectedMemo, setSelectedMemo } = useSelectedMemo();

  useEffect(() => {
    localStorage.setItem("memos", JSON.stringify(memos));
  }, [memos]);

  const addMemo = () => {
    const newMemo = { id: uuid(), body: "" };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  };

  const editMemo = () => {
    const newMemos = memos.map((memo) => {
      if (memo.id === selectedMemo.id) {
        return { ...memo, body: selectedMemo.body };
      } else {
        return memo;
      }
    });
    setMemos(newMemos);
    setSelectedMemo(null);
  };

  const deleteMemo = () => {
    setMemos(
      memos.filter((memo) => {
        return memo.id !== selectedMemo.id;
      }),
    );
    setSelectedMemo(null);
  };

  return (
    <MemosContext.Provider value={{ memos, addMemo, editMemo, deleteMemo }}>
      {children}
    </MemosContext.Provider>
  );
}

export function useMemos() {
  return useContext(MemosContext);
}
