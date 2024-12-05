import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// Custom hook for consuming context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const checkLogin = localStorage.getItem("isLogin");
  let TOKEN = localStorage.getItem("authToken");
  const isLogin = Boolean(checkLogin) && TOKEN;

  // useEffect(() => {}, []);

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
    const _checkLogin = localStorage.getItem("isLogin");
    const _TOKEN = localStorage.getItem("authToken");
    const _isLogin = Boolean(_checkLogin) && _TOKEN;
    setIsAuthenticated(_isLogin);
    setUser(userDetails);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setUserDetails({});
    localStorage.clear();
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
