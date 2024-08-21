import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import React, { useState } from "react";
import auth from "../config/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("result", result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithub = () => {
    const provider = new GithubAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("email sent..");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <h1>Login Page</h1>

      <input
        onChange={(e) => setEmail(e.target.value)}
        type="text"
        placeholder="Enter Email"
      />

      <br />
      <br />

      <input
        onChange={(e) => setPassword(e.target.value)}
        type="text"
        placeholder="Enter password"
      />

      <button onClick={handleForgotPassword}>Forgot Password</button>

      <br />
      <br />

      <button onClick={handleLogin}>Login</button>

      <button onClick={handleGoogle}>Login with Google</button>

      <button onClick={handleGithub}>Login with Github</button>
    </div>
  );
};

export default Login;
