import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "../../App.css";

const Navbar = () => {
  return (
    <div>
      <ul
        style={{
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/home/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/home/contact">Contact</NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default Navbar;
