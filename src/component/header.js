import { useContext } from "react";
import { IsLoginContext } from "../context/is_login_context";

export default function Header() {
  const isLogin = useContext(IsLoginContext);
  return <div>{isLogin ? "ログイン済" : "未ログイン"}</div>;
}
