import Title from "./title";
import AddMemo from "./add_memo";

export default function Sidebar({ changeEditMode, setEditingMemo }) {
  return (
    <ul style={{ listStyle: "none" }}>
      <Title />
      <AddMemo
        changeEditMode={changeEditMode}
        setEditingMemo={setEditingMemo}
      />
    </ul>
  );
}
