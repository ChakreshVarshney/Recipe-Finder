import React, { createContext, useContext, useState } from 'react';

const AuthenticationContext = createContext();

export function useAuthentication() {
  return useContext(AuthenticationContext);
}

export function AuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = () => {
    setIsAuthenticated(true);
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  const authValue = {
    isAuthenticated,
    signIn,
    signOut,
  };

  return <AuthenticationContext.Provider value={authValue}>{children}</AuthenticationContext.Provider>;
}
