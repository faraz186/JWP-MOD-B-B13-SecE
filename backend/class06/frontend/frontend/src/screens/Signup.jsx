import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../Config/constraints";

const Signup = ({ click }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const userObj = {
        firstName,
        lastName,
        email,
        password,
      };

      const response = await axios.post(`${BASE_URL}/api/signup`, userObj);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Signup Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter First name</label>
        <input
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter name"
        />

        <br />
        <br />
        <label htmlFor="">Enter last name</label>
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter name"
        />

        <br />
        <br />

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
          Already have an account login!!
        </a>
        <br />
        <br />
        <button>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
