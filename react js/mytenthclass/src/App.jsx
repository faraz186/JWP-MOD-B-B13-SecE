import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import About from "./Screens/About";
import Contact from "./Screens/Contact";
import Navbar from "./Components/Navbar/Navbar";
import User from "./Components/User/User.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navbar />}>
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />   
      </Route>

      <Route path="user/:key" element={<User />} />
    </Routes>
  );
};

export default App;
