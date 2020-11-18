import { Dispatch } from "redux";
import { NavDispatchTypes } from "./navbarActionTypes";

export const navbarFalse = () => {
  return {
    type: "NAVBAR_FALSE",
    payload: false,
  };
};

export const navbarTrue = () => {
  return {
    type: "NAVBAR_TRUE",
    payload: true,
  };
};
