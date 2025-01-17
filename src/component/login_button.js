import { useContext } from "react";
import { IsLoginContext } from "../context/is_login_context";

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
