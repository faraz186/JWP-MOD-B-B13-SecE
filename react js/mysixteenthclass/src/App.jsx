import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<h1>Dashboard Page</h1>} />

      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default App;
