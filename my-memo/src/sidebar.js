import Title from "./title";
import AddMemo from "./add_memo";

export default function Sidebar({
  changeEditMode,
  editingMemo,
  setEditingMemo,
}) {
  return (
    <ul style={{ listStyle: "none" }}>
      <Title
        changeEditMode={changeEditMode}
        editingMemo={editingMemo}
        setEditingMemo={setEditingMemo}
      />
      <AddMemo
        changeEditMode={changeEditMode}
        setEditingMemo={setEditingMemo}
      />
    </ul>
  );
}
