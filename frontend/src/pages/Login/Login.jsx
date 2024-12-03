import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const userDetails = { name: "John Doe", email: "john.doe@example.com" }; // Simulate user data
    login(userDetails); // Set user as authenticated
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">Login</h1>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
        onClick={handleLogin}
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
