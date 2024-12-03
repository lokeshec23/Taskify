import { useEffect } from "react";

const AlertMessage = ({ type, message }) => {
  debugger;
  const getClassName = () => {
    switch (type) {
      case "success":
        return "";
      case "error":
        return "text-danger fs-6 mt-2";
      default:
        return "";
    }
  };
  return <p className={getClassName()}>{message}</p>;
};

export default AlertMessage;
