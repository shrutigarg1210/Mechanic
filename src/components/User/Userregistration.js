import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";

const clientId =
  "635979112033-lmk9lhtqvopba3glabr2jh2i87s3drd6.apps.googleusercontent.com";
function Userregistration() {

  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  
  const onLoginSuccess = (res) => {

    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };

  return (
    <div id="SignInButton">
      {showloginButton ? (
        <GoogleLogin
          clientId={clientId}
          buttonText="Sign in with Google 🚀"
          onSuccess={onLoginSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      ) : null}

      {showlogoutButton ? (
        <googleLogout
          clientId={clientId}
          buttonText="Sign Out"
          onSuccess={onSignoutSuccess}
        />
      ) : null}
    </div>
  );
}

export default Userregistration;

// Sign in with Google 🚀
