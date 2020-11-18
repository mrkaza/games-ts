import React from "react";
import { GoogleSignIn } from "../modules/auth";

const SignIn = () => {
  return (
    <div className="sign-in">
      <GoogleSignIn />
    </div>
  );
};

export default SignIn;
