import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage";
import { signup } from "../../services/Signup/SignupServices.js";
import "../../styles/Signup.css";
import { useAuth } from "../../context/AuthContext.jsx";
const Signup = () => {
  const navigate = useNavigate();
  const { showMessage, setShowMessage } = useAuth();
  const Init_Error = {
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
    },
    Init_formData = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  const [formData, setFormData] = useState(Init_formData);

  const [error, setError] = useState(Init_Error);

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  }); // State for toggling password visibility

  const togglePasswordVisibility = (name) => {
   
    // const { name } = event.target;
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError((prev) => ({
      ...prev,
      [e.target.name]: {
        isError: false,
        message: "",
      },
    }));
  };

  /**
   * Validates the form data and returns a Promise.
   * Resolves if there are no validation errors, otherwise rejects with error details.
   */
  const validateForm = () => {
    return new Promise((resolve, reject) => {
      const errors = {},
        emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex

      // Check if name is provided
      if (!formData.name) {
        errors.name = { isError: true, message: "Name should not be empty." };
      }

      // Check if email is provided
      if (!formData.email) {
        errors.email = { isError: true, message: "Email should not be empty." };
      } else if (!emailRegex.test(formData.email)) {
        errors.email = { isError: true, message: "Email format is invalid." };
      }

      // Check if password is provided
      if (!formData.password) {
        errors.password = {
          isError: true,
          message: "Password should not be empty.",
        };
      }

      // Check if confirmPassword is provided
      if (!formData.confirmPassword) {
        errors.confirmPassword = {
          isError: true,
          message: "Confirm password should not be empty.",
        };
      }

      // Check if password matches confirmPassword
      if (
        formData.password &&
        formData.confirmPassword &&
        formData.password !== formData.confirmPassword
      ) {
        errors.confirmPassword = {
          isError: true,
          message: "Confirm password does not match.",
        };
      }

      // If there are errors, reject the Promise; otherwise, resolve
      if (Object.keys(errors).length > 0) {
        reject(errors);
      } else {
        resolve({});
      }
    });
  };

  /**
   * Handles the form submission process.
   * Validates form data, sets errors if validation fails, and navigates on success.
   */
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      // Wait for form validation to complete
      const errors = await validateForm();
      if (Object.keys(errors).length > 0) {
        setError(errors);
        return;
      }
      // Call signup API
      const response = await signup(formData);
      
      if (response.type === "error") {
        setShowMessage((prev) => ({
          ...prev,
          isShow: true,
          type: "danger",
          message: response.message,
        }));
        return;
      }
      setShowMessage((prev) => ({
        ...prev,
        isShow: true,
        type: "success",
        message: "Signup Successful! You can now login.",
      }));
      setFormData(Init_formData);
      setError(Init_Error);
    } catch (errors) {
      // Set validation errors
      setError(errors);
      setShowMessage((prev) => ({
        ...prev,
        isShow: true,
        type: "danger",
        message: "Somthing went wrong!",
      }));
    }
  };

  const handleLoginPageClick = () => {
    navigate("/");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="card p-4 shadow" style={{ width: "400px" }}>
          <h2 className="text-center mb-4 signup-heading">Sign Up</h2>
          <form>
            <div className="mb-2">
              <label htmlFor="name" className="form-label">
                Name<span className="text-danger">*</span>
              </label>
              <input
                type="text"
                id="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your Name"
              />
              {error?.name?.isError && (
                <AlertMessage
                  type={"error"}
                  message={error.name.message}
                  style={{ margin: "0px" }}
                />
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email <span className="text-danger">*</span>
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
              {error?.email?.isError && (
                <AlertMessage
                  type={"error"}
                  message={error.email.message}
                  style={{ margin: "0px" }}
                />
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password <span className="text-danger">*</span>
              </label>
              <div className="input-group">
                <input
                  type={showPassword.password ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
                />
                <span
                  className="input-group-text"
                  name="password"
                  onClick={() => {
                    togglePasswordVisibility("password");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword.password ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
              {error?.password?.isError && (
                <AlertMessage
                  type={"error"}
                  message={error.password.message}
                  style={{ margin: "0px" }}
                />
              )}
            </div>
            <div className="mb-2">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password <span className="text-danger">*</span>
              </label>

              <div className="input-group">
                <input
                  type={showPassword.confirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Confirm your password"
                />
                <span
                  className="input-group-text"
                  name="confirmPassword"
                  onClick={() => {
                    togglePasswordVisibility("confirmPassword");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  {showPassword.confirmPassword ? "👁️" : "👁️‍🗨️"}
                </span>
              </div>
              {error?.confirmPassword?.isError && (
                <AlertMessage
                  type={"error"}
                  message={error.confirmPassword.message}
                  style={{ margin: "0px" }}
                />
              )}
            </div>
            <button
              type="submit"
              className="signup-button"
              onClick={handleSubmit}
            >
              Sign Up
            </button>
          </form>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <p onClick={handleLoginPageClick} className="text-decoration-none">
              <span className="signup-signupPara">Log in here</span>
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
