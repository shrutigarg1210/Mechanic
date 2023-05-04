// import React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";

// const clientId =
//   "635979112033-lmk9lhtqvopba3glabr2jh2i87s3drd6.apps.googleusercontent.com";
// // // function Userregistration() {

// // //   const [showloginButton, setShowloginButton] = useState(true);
// // //   const [showlogoutButton, setShowlogoutButton] = useState(false);
  
// // //   const onLoginSuccess = (res) => {

// // //     console.log("Login Success:", res.profileObj);
// // //     setShowloginButton(false);
// // //     setShowlogoutButton(true);
// // //   };

// // //   const onFailure = (res) => {
// // //     console.log("Login Failed:", res);
// // //   };

// // //   const onSignoutSuccess = () => {
// // //     alert("You have been logged out successfully");
// // //     console.clear();
// // //     setShowloginButton(true);
// // //     setShowlogoutButton(false);
// // //   };
// // const handleLogin = async googleData => {
// //   const res = await fetch("/api/v1/auth/google", {
// //       method: "POST",
// //       body: JSON.stringify({
// //       token: googleData.tokenId
// //     }),
// //     headers: {
// //       "Content-Type": "application/json"
// //     }
// //   })
// //   const data = await res.json()
// //   // store returned user somehow
// // }
// //   return (
// //     <div id="SignInButton">
// //       {showloginButton ? (
// //         <GoogleLogin
// //           clientId={clientId}
// //           buttonText="Sign in with Google 🚀"
// //           onSuccess={handleLogin}
// //           onFailure={handleLogin}
// //           cookiePolicy={"single_host_origin"}
// //           isSignedIn={true}
// //         />
// //       ) : null}

// //       {/* {showlogoutButton ? (
// //         <googleLogout
// //           clientId={clientId}
// //           buttonText="Sign Out"
// //           onSuccess={onSignoutSuccess}
// //         />
// //       ) : null} */}
// //     </div>
// //   );
// // }

// // export default Userregistration;

// // // Sign in with Google 🚀


// const handleLogin = async googleData => {
//     const res = await fetch("/api/v1/auth/google", {
//         method: "POST",
//         body: JSON.stringify({
//         token: googleData.tokenId
//       }),
//       headers: {
//         "Content-Type": "application/json"
//       }
//     })
//     const data = await res.json()
//     // store returned user somehow
//   }
// const Userregistration = () => {
//   return (
//     <div>

//         <GoogleLogin
//           clientId={clientId}
//           buttonText="Sign in with Google 🚀"
//           onSuccess={handleLogin}
//           onFailure={handleLogin}
//           cookiePolicy={"single_host_origin"}
//           isSignedIn={true}
//         />
     

//       {/* {showlogoutButton ? (
//         <googleLogout
//           clientId={clientId}
//           buttonText="Sign Out"
//           onSuccess={onSignoutSuccess}
//         />
//       ) : null} */}
//     </div>
//   )
// }

// export default Userregistration

// import React from "react";
// import Button from 'react-bootstrap/Button'


// //https://developers.google.com/identity/gsi/web/guides/display-button
// //https://developers.google.com/identity/gsi/web/tools/configurator to customise the button
// // https://v5.reactrouter.com/web/example/auth-workflow example of authentication
// class LoginButton extends React.Component {

//     render() {

//         return (
//             <>
//             <div id="g_id_onload"
//                  data-client_id="635979112033-lmk9lhtqvopba3glabr2jh2i87s3drd6.apps.googleusercontent.com"
//                  data-context="signin"
//                  data-ux_mode="popup"
//                  data-login_uri="https://mywebsite.com"
//                  data-auto_prompt="false">
//             </div>

//             <div class="g_id_signin"
//                  data-type="standard"
//                  data-shape="pill"
//                  data-theme="outline"
//                  data-text="signin_with"
//                  data-size="medium"
//                  data-logo_alignment="left">
//             </div>
//             </>
//         );
//     }
// }

// // export default LoginButton;