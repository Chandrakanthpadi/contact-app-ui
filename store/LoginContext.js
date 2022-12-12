import React, { useContext, useState } from "react";

const LoginContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export const LoginProvider = ({ children }) => {
  const [jwt, setName] = useState("");

  return (
    <LoginContext.Provider value={{ jwt }}>{children}</LoginContext.Provider>
  );
};
