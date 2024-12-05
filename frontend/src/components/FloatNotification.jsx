import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useAuth } from "../context/AuthContext";
const FloatNotification = ({
  type = "info",
  message,
  style = {},
  position = "bottom-right",
}) => {
  const { setShowMessage } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage((prev) => ({
        ...prev,
        isShow: false,
        type: "",
        message: "",
      }));
    }, 3000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  // Map the type prop to Bootstrap alert classes
  const alertClass = `alert alert-${type} alert-dismissible fade show`;

  // Default positioning styles
  const positions = {
    "bottom-right": { position: "fixed", bottom: "20px", right: "20px" },
    "bottom-left": { position: "fixed", bottom: "20px", left: "20px" },
    "top-right": { position: "fixed", top: "20px", right: "20px" },
    "top-left": { position: "fixed", top: "20px", left: "20px" },
  };

  const positionStyle = positions[position] || positions["bottom-right"];

  return (
    <div
      style={{ ...positionStyle, ...style }}
      className={alertClass}
      role="alert"
    >
      {message}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={() => setVisible(false)} // Close on click
      ></button>
    </div>
  );
};

FloatNotification.propTypes = {
  type: PropTypes.oneOf(["success", "danger", "warning", "info"]), // Notification types
  message: PropTypes.string.isRequired, // Notification message
  style: PropTypes.object, // Custom inline styles
  position: PropTypes.oneOf([
    "bottom-right",
    "bottom-left",
    "top-right",
    "top-left",
  ]), // Positioning
};

export default FloatNotification;
