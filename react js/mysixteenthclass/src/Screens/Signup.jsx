import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import auth from "../config/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    console.log("name", name);
    console.log("email", email);
    console.log("username", username);
    console.log("password", password);

    let userObj = {
      name,
      email,   
      username,
    };

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("userCredential", userCredential);
        localStorage.setItem("userData", JSON.stringify(userObj));
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (  
    <div>
      <h1>Signup Page</h1>

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Full Name"
      />
      <br />
      <br />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Enter username"
      />
      <br />
      <br />
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

      <br />
      <br />

      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default Signup;
