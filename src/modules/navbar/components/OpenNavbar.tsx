import React from "react";
import { useDispatch } from "react-redux";
import { navbarTrue } from "../index";

export const OpenNavbar = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(navbarTrue());
  };
  return (
    <div className="navbar-sign-in">
      <button onClick={handleClick} className="navbar-open">
        <i className="material-icons">drag_handle</i>
      </button>
      <a href="#" className="icon">
        <i className="material-icons">games</i>{" "}
      </a>
    </div>
  );
};
