export default function Title() {
  const memos = JSON.parse(localStorage.getItem("memos")) ?? [];
  const titles = memos.map((memo) => {
    const title = memo.body.split("\n")[0];
    return (
      <li key={memo.id}>
        <a href="#">{title}</a>
      </li>
    );
  });

  return <ul style={{ listStyle: "none" }}>{titles}</ul>;
}
