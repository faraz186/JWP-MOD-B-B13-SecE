import React, { useState } from "react";   
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";   
   
const App = () => {
  return (   
    <>
      <Routes>
        <Route path="/Home" element={<h1>Home Page</h1>} />      
        <Route path="/about" element={<h1>About Page</h1>} />   
      </Routes>

    </>
  );   
};

export default App;
