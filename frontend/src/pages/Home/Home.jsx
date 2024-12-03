import React from "react";
import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { user, theme, toggleTheme, logout } = useAuth();

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
      <p className="mt-2 text-lg">Email: {user.email}</p>

      <div className="mt-4 space-x-4">
        <button
          className="px-4 py-2 font-bold text-white bg-green-500 rounded hover:bg-green-600"
          onClick={toggleTheme}
        >
          Toggle Theme
        </button>
        <button
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
          onClick={logout}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Home;
