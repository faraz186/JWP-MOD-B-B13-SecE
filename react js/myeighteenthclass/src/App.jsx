import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Login";
import SignUp from "./Screens/Signup";
import Dashboard from "./Screens/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthRoute from "./routes/AuthRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route index element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
