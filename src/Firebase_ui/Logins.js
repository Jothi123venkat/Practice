import React, { useEffect } from "react";
import { getAuth, GoogleAuthProvider, EmailAuthProvider, PhoneAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { app } from "./Firebaseui"; // Ensure this import is correctly pointing to your Firebase configuration
import { Link } from "react-router-dom";

const Logins = () => {
  useEffect(() => {
    // Initialize Firebase UI with Firebase Auth instance
    const ui = firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(getAuth(app));

    // Start Firebase UI with configurations
    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "/Login",
      signInOptions: [
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          clientId: "YOUR_GOOGLE_CLIENT_ID",
        },
        {
          provider: EmailAuthProvider.PROVIDER_ID,
        },
    
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
    });
 
  }, []);


  // alert(" successfully registered")
  return (
    <div>
      <div id="firebaseui-auth-container">
 <Link to="/Login">     <h2>login</h2></Link>
      </div>
    </div>
  );
};

export default Logins;
