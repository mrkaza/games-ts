import React from "react";
import { useDispatch } from "react-redux";
import { googleSignIn } from "../index";

export const GoogleSignIn = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(googleSignIn());
  };

  return (
    <button onClick={handleClick} className="google-sign-in">
      <span className="g">G</span> <span className="sign">sign</span>{" "}
      <span className="in">in</span>
    </button>
  );
};
