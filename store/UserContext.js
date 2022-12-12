import React, { useContext, useState } from "react";

const UserContext = React.createContext();

export function usePrincipalUser() {
  return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
