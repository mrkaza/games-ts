import { NavDispatchTypes } from "./navbarActionTypes";
type InitState = {
  navbar: boolean;
};

const initState: InitState = {
  navbar: false,
};

export const navbarReducer = (state: InitState = initState, action: any) => {
  switch (action.type) {
    case "NAVBAR_FALSE":
      return {
        ...state,
        navbar: action.payload,
      };
    case "NAVBAR_TRUE":
      return {
        ...state,
        navbar: action.payload,
      };
    case "GOOGLE_SIGN_IN":
      return {
        ...state,
        navbar: false,
      };
    case "LOGOUT":
      return {
        ...state,
        navbar: false,
      };
    default:
      return state;
  }
};
