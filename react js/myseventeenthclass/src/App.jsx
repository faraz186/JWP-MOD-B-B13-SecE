import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import Dashboard from "./Screens/Dashboard";

const App = () => {    
  return (     
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/signup" element={<Signup />} />
    </Routes>
  );   
};

export default App;
