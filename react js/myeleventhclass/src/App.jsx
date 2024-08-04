import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "./Screens/Product";
import Home from "./Screens/Home";

const App = () => {   
  return (
    <Routes>
      products
      <Route index element={<Home />} />
      <Route path="products/:id" element={<Product />} />    
    </Routes>
  );
};

export default App;
