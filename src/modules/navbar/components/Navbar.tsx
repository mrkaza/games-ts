import React from "react";
import { CloseNav } from "./CloseNav";
import { LogoutNav } from "./LogoutNav";
import { useSelector, useDispatch } from "react-redux";
import { UserType } from "../../auth";
import { RootStore } from "../../../consts/rootReducer";
import { GoogleSignIn } from "../../auth";
import { NavLink } from "react-router-dom";
import { navbarFalse } from "../index";

export const Navbar = () => {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(navbarFalse());
  };

  return (
    <div className="navbar">
      <div className="navbar-inside">
        <CloseNav />
        {user ? (
          <LogoutNav />
        ) : (
          <div className="logout">
            <GoogleSignIn />
          </div>
        )}
        <ul>
          <li onClick={handleClick}>
            <NavLink exact to="/">
              home
            </NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/popular">most popular</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/newest">newest</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
