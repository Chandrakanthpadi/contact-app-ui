import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function usePrincipalUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [jwt, setName] = useState("");

  return (
    <UserContext.Provider value={{ jwt }}>{children}</UserContext.Provider>
  );
};
