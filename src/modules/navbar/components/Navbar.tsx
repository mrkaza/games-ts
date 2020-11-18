import React from "react";
import { CloseNav } from "./CloseNav";
import { LogoutNav } from "./LogoutNav";
import { useSelector } from "react-redux";
import { UserType } from "../../auth";
import { RootStore } from "../../../consts/rootReducer";
import { GoogleSignIn } from "../../auth";

export const Navbar = () => {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  console.log(user);
  return (
    <div className="navbar">
      <div className="navbar-inside">
        <CloseNav />
        {user ? <LogoutNav /> : <GoogleSignIn />}
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
