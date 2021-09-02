import React, { useEffect } from "react";
import "./alert.css";

const Alert = ({ type, msg, removeAlert, data }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [data, removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
