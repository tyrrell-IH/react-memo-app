import { useState, useContext, createContext } from "react";

const IsLoginContext = createContext(false);

export function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const switchToLogin = () => {
    setIsLogin(true);
  };
  const switchToLogout = () => {
    setIsLogin(false);
  };

  return (
    <IsLoginContext.Provider value={{ isLogin, switchToLogin, switchToLogout }}>
      {children}
    </IsLoginContext.Provider>
  );
}

export function useIsLogin() {
  return useContext(IsLoginContext);
}
