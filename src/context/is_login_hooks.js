import { useState, useContext, createContext } from "react";

const IsLoginContext = createContext(false);

export function IsLoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const switchIsLogin = () => setIsLogin(!isLogin);

  return (
    <IsLoginContext.Provider value={{ isLogin, switchIsLogin }}>
      {children}
    </IsLoginContext.Provider>
  );
}

export function useIsLogin() {
  return useContext(IsLoginContext);
}
