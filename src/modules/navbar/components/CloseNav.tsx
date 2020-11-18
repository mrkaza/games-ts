import React from "react";
import { useDispatch } from "react-redux";
import { navbarFalse } from "../index";

export const CloseNav = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(navbarFalse());
  };
  return (
    <button onClick={handleClick} className="navbar-close">
      <i className="material-icons">close</i>
    </button>
  );
};
