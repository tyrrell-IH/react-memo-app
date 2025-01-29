import { useIsLogin } from "../hooks/is_login_hooks";

export default function Header() {
  const { isLogin } = useIsLogin();
  return <div>{isLogin ? "ログイン済" : "未ログイン"}</div>;
}
