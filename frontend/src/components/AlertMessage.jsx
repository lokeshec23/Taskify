import { useEffect } from "react";

const AlertMessage = ({ type = "", message = "", style = {} }) => {
  const getClassName = () => {
    switch (type) {
      case "success":
        return "";
      case "error":
        return "text-danger mt-2";
      default:
        return "";
    }
  };

  return (
    <p className={getClassName()} style={style}>
      {message}
    </p>
  );
};

export default AlertMessage;
