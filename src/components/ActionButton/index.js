import React from "react";
import "./ActionButton.scss";
import { NavLink } from "react-router-dom";

const ActionButton = ({ value, to, disabled }) => {
  return (
    <button
      className={`action-button ${disabled ? "disabled-button" : ''}`}
    >
      {!disabled && to ? <NavLink to={to}>{value}</NavLink> : value}
    </button>
  );
};

export default ActionButton;
