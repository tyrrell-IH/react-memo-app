import { useIsLogin } from "../hooks/is_login_hooks";

export default function LoginButton() {
  const { isLogin, switchToLogin, switchToLogout } = useIsLogin();

  return (
    <button
      onClick={() => {
        isLogin ? switchToLogout() : switchToLogin();
      }}
    >
      {isLogin ? "ログアウト" : "ログイン"}
    </button>
  );
}
