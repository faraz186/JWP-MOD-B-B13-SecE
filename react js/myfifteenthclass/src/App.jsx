import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home";
import CreateUser from "./Screens/CreateUser";
import EditUser from "./Screens/EditUser";

const App = () => {
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="createUser" element={<CreateUser />} />
      <Route path="editUser/:id" element={<EditUser />} />
    </Routes>  
  );
};

export default App;
