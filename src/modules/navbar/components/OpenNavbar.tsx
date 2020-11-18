import React from "react";
import { useDispatch } from "react-redux";
import { navbarTrue } from "../index";
import { Link } from "react-router-dom";

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
      <Link to="/" className="icon">
        <i className="material-icons">games</i>{" "}
      </Link>
    </div>
  );
};
