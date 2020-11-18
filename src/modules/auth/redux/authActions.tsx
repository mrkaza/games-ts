import { Dispatch } from "redux";
import { AuthDispatchTypes } from "./authActionTypes";
import { fbAuth, provider } from "../../../consts/fbConfig";

export const googleSignIn = () => {
  return (dispatch: Dispatch<AuthDispatchTypes>) => {
    fbAuth.signInWithPopup(provider).then((user) => {
      dispatch({
        type: "GOOGLE_SIGN_IN",
        payload: user,
      });
    });
  };
};

export const logout = () => {
  return (dispatch: Dispatch<AuthDispatchTypes>) => {
    fbAuth.signOut().then(() => {
      dispatch({ type: "LOGOUT" });
    });
  };
};
