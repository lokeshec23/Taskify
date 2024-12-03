import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    name: {
      isError: false,
      message: "",
    },
    email: {
      isError: false,
      message: "",
    },
    password: {
      isError: false,
      message: "",
    },
    confirmPassword: {
      isError: false,
      message: "",
    },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();

    const { name, email, password, confirmPassword } = formData;
    if (!name) {
      setError((...prev) => ({
        ...prev,
        name: {
          isError: true,
          message: "Name Should not be empty.",
        },
      }));
      return;
    }

    if (password !== confirmPassword) {
      return;
    }

    // Simulate a successful sign-up and navigate to the login page
    console.log("User signed up successfully", { email, password });
    navigate("/");
  };

  const handleLoginPageClick = () => {
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your Name"
            />
            {error.name.isError && (
              <AlertMessage type={"error"} message={error.name.message} />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
            />
            {error.email.isError && (
              <AlertMessage type={"error"} message={error.email.message} />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Create a password"
            />
            {error.password.isError && (
              <AlertMessage type={"error"} message={error.password.message} />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              placeholder="Confirm your password"
            />
            {error.confirmPassword.isError && (
              <AlertMessage
                type={"error"}
                message={error.confirmPassword.message}
              />
            )}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <p onClick={handleLoginPageClick} className="text-decoration-none">
            Log in here
          </p>
        </p>
      </div>
    </div>
  );
};

export default Signup;
