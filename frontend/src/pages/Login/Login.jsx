// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../../context/AuthContext";

// const Login = () => {
//   const { login } = useAuth();
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const userDetails = { name: "John Doe", email: "john.doe@example.com" }; // Simulate user data
//     login(userDetails); // Set user as authenticated
//     navigate("/home");
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <h1 className="mb-4 text-2xl font-bold">Login</h1>
//       <button
//         className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
//         onClick={handleLogin}
//       >
//         Log In
//       </button>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlertMessage from "../../components/AlertMessage";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const Init_Error = {
    email: {
      isError: false,
      message: "",
    },
    password: {
      isError: false,
      message: "",
    },
  };

  const Init_formData = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(Init_formData);
  const [error, setError] = useState(Init_Error);
  const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
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

      // Simulate a successful login
      console.log("User logged in successfully", {
        email: formData.email,
        password: formData.password,
      });
      const userDetails = { pass: formData.password, email: formData.email }; // Simulate user data
      login(userDetails); // Set user as authenticated
      navigate("/home");
    } catch (errors) {
      // Set validation errors
      setError(errors);
    }
  };

  const handleSignupPageClick = () => {
    navigate("/signup");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Log In</h2>

        <form>
          <div className="mb-3">
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
              <AlertMessage type={"error"} message={error.email.message} />
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password <span className="text-danger">*</span>
            </label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your password"
              />
              <span
                className="input-group-text"
                onClick={togglePasswordVisibility}
                style={{ cursor: "pointer" }}
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
            {error?.password?.isError && (
              <AlertMessage type={"error"} message={error.password.message} />
            )}
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100"
            onClick={handleSubmit}
          >
            Log In
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account?{" "}
          <p onClick={handleSignupPageClick} className="text-decoration-none">
            Sign up here
          </p>
        </p>
      </div>
    </div>
  );
};

export default Login;
