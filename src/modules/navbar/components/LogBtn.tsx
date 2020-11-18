import React from "react";
import { useSelector } from "react-redux";
import { UserType } from "../../auth";
import { RootStore } from "../../../consts/rootReducer";

export const LogBtn = () => {
  const user: null | UserType = useSelector(
    (state: RootStore) => state.auth.user
  );
  return (
    <div className="log">
      {user ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
};
