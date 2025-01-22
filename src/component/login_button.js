import { useIsLogin } from "../context/is_login_hooks";

export default function LoginButton() {
  const { isLogin, switchIsLogin } = useIsLogin();

  return (
    <button
      onClick={() => {
        switchIsLogin();
      }}
    >
      {isLogin ? "ログアウト" : "ログイン"}
    </button>
  );
}
