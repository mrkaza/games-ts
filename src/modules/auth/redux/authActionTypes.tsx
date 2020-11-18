interface GoogleSignIn {
  type: "GOOGLE_SIGN_IN";
  payload: object;
}
interface Logout {
  type: "LOGOUT";
}

export type AuthDispatchTypes = GoogleSignIn | Logout;
