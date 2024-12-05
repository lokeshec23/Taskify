import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

// Custom hook for consuming context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const checkLogin = localStorage.getItem("isLogin");
  const TOKEN = localStorage.getItem("authToken");
  const isLogin = Boolean(checkLogin) && TOKEN;
  const [isAuthenticated, setIsAuthenticated] = useState(isLogin);
  const [user, setUser] = useState(null); // To store user details
  const [theme, setTheme] = useState("light"); // Light or dark theme
  const [showMessage, setShowMessage] = useState({
    isShow: false,
    type: "",
    message: "",
    style: { zIndex: 1050 },
    position: "bottom-right",
  });
  const [userDetails, setUserDetails] = useState({});

  const login = (userDetails) => {
    setIsAuthenticated(isLogin);
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
        TOKEN,
        isAuthenticated,
        user,
        theme,
        showMessage,
        userDetails,
        setUserDetails,
        setShowMessage,
        login,
        logout,
        toggleTheme,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
