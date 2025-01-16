import { useContext } from "react";
import { IsLoginContext } from "./login_context";

export default function LoginButton({ setIsLogin }) {
  const isLogin = useContext(IsLoginContext);

  return (
    <button
      onClick={() => {
        setIsLogin(!isLogin);
      }}
    >
      {isLogin ? "ログアウト" : "ログイン"}
    </button>
  );
}
