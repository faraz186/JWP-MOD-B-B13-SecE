import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Config/constraints";

const Login = ({ click }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    try {
      e.preventDefault();

      const loginOBJ = {
        email,
        password,
      };

      const response = await axios.post(`${BASE_URL}/api/login`, loginOBJ);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="">Enter Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="name"
          placeholder="Enter Email"
        />

        <br />
        <br />

        <label htmlFor="">Enter password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="name"
          placeholder="Enter password"
        />

        <br />
        <br />
        <a href="#" onClick={click}>
          Create new account!!
        </a>
        <br />
        <br />

        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
