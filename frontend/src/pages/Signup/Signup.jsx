import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage";

const Signup = () => {
  const navigate = useNavigate();
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
      const errors = {};

      // Check if name is provided
      if (!formData.name) {
        errors.name = { isError: true, message: "Name should not be empty." };
      }

      // Check if email is provided
      if (!formData.email) {
        errors.email = { isError: true, message: "Email should not be empty." };
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
      debugger;
      // Wait for form validation to complete
      const errors = await validateForm();
      if (Object.keys(errors).length > 0) {
        setError(errors);
        return;
      }

      // Simulate a successful sign-up and navigate to the login page
      console.log("User signed up successfully", {
        email: formData.email,
        password: formData.password,
      });
      navigate("/login");
    } catch (errors) {
      // Set validation errors
      console.log("Error in handleSubmit", errors);
    }
  };

  const handleLoginPageClick = () => {
    navigate("/login");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Sign Up</h2>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
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
            {error?.email?.isError && (
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
            {error?.password?.isError && (
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
            {error?.confirmPassword?.isError && (
              <AlertMessage
                type={"error"}
                message={error.confirmPassword.message}
              />
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
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
