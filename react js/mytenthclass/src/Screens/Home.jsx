import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
   
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>

      <p>   
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        debitis!
      </p>

      <a href="">Google</a>
    </div>
  );
};

export default Home;
