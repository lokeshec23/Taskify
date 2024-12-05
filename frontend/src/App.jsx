import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Signup from "./pages/Signup/Signup.jsx";
import FloatNotification from "./components/FloatNotification.jsx";
import { useAuth } from "./context/AuthContext.jsx";

const App = () => {
  const { showMessage, setShowMessage } = useAuth();
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          {/* Protected Route */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
      {showMessage?.isShow && (
        <FloatNotification
          type={showMessage?.type}
          message={showMessage?.message}
          style={showMessage?.style}
          position={showMessage?.position}
        />
      )}
    </>
  );
};

export default App;
