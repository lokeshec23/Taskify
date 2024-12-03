import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Custom hook for consuming context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null); // To store user details
  const [theme, setTheme] = useState("light"); // Light or dark theme

  const login = (userDetails) => {
    setIsAuthenticated(true);
    setUser(userDetails);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        theme,
        login,
        logout,
        toggleTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
