import Title from "./title";
import AddMemo from "./add_memo";

export default function Sidebar({ editingMemo, setEditingMemo }) {
  return (
    <ul style={{ listStyle: "none" }}>
      <Title editingMemo={editingMemo} setEditingMemo={setEditingMemo} />
      <AddMemo setEditingMemo={setEditingMemo} />
    </ul>
  );
}
