import React from "react";
import { CloseNav } from "./CloseNav";
import { LogoutNav } from "./LogoutNav";
import { GoogleSignIn } from "../../auth";
import { useSelector } from "react-redux";
import { UserType } from "../../auth";
import { RootStore } from "../../../consts/rootReducer";

export const Navbar = () => {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  return (
    <div className="navbar">
      <div className="navbar-inside">
        <CloseNav />
        <LogoutNav />
        <GoogleSignIn />
        <ul>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">most popular</a>
          </li>
          <li>
            <a href="#">newest</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
