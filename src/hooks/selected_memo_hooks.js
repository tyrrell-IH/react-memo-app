import { useState, useContext, createContext } from "react";

const SelectedMemoContext = createContext(null);

export function SelectedMemoProvider({ children }) {
  const [selectedMemo, setSelectedMemo] = useState(null);

  return (
    <SelectedMemoContext.Provider value={{ selectedMemo, setSelectedMemo }}>
      {children}
    </SelectedMemoContext.Provider>
  );
}

export function useSelectedMemo() {
  return useContext(SelectedMemoContext);
}
