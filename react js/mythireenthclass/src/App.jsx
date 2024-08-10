import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SingleProduct from "./screens/SingleProduct";

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="product/:id" element={<SingleProduct />} />
    </Routes>   
  );
};

export default App;
