import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import Products from "./Screens/Products";
import Dashboard from "./Screens/Dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="product/:id" element={<Products />} />
    </Routes>    
  );
};

export default App;
