import { NavDispatchTypes } from "./navbarActionTypes";
type InitState = {
  navbar: boolean;
};

const initState: InitState = {
  navbar: false,
};

export const navbarReducer = (
  state: InitState = initState,
  action: NavDispatchTypes
) => {
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
    default:
      return state;
  }
};
