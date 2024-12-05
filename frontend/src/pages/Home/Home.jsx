import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { fetchUserDetails } from "../../services/Home/getUserDetails";

const Home = () => {
  const { user, theme, toggleTheme, logout, userDetails, setUserDetails } =
    useAuth();

  useEffect(() => {
    const response = fetchUserDetails();
    setUserDetails(response);
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold">Welcome, {userDetails.name}!</h1>
    </div>
  );
};

export default Home;
