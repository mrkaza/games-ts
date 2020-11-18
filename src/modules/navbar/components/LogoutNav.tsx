import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../auth";

export const LogoutNav = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <div className="logout">
      <button onClick={handleClick} className="btn-logout">
        logout
      </button>
    </div>
  );
};
