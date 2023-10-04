import React, { useState, ChangeEvent } from "react";
import Header from "./header/Header";
import { useAuth } from "../AuthContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

function LoginPage() {
  const { user, email, password, setUser, setEmail, setPassword } = useAuth();

  const setEmailValue = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const setPasswordValue = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  // ------------------------------- SIGN UP WITH GOOGLE ACCOUNT ----------------------------------//
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        setUser(user);
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  // ------------------------------- SIGN UP WITH EMAIL & PASSWORD ----------------------------------//
  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  // --------------------------------------- SIGN IN --------------------------------------------------//
  const loginWihtEmailAndPassword = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // --------------------------------------- RETUREN ---------------------------------------------------//
  return (
    <div>
      <Header />
      <Card>
        <CardContent>
          <TextField
            id="filled"
            value={email}
            onChange={setEmailValue}
            fullWidth
            label="Email"
            variant="filled"
          />
          <TextField
            id="filled-basic"
            label="Password"
            value={password}
            fullWidth
            sx={{mb: 2}}
            type="password"
            onChange={setPasswordValue}
            variant="filled"
          />
        </CardContent>
        <CardActions>
          <Button variant="text" onClick={signUp}>
            Signup
          </Button>
          <Button variant="text" onClick={loginWihtEmailAndPassword}>
            Login
          </Button>
          <Button variant="text" onClick={signInWithGoogle}>
            Login with Google
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default LoginPage;
