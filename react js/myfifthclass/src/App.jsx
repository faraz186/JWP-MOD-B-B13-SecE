import React, { useState } from "react";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { AiFillBell } from "react-icons/ai";
   
const App = () => {
  const [isloggedIn,setIsLoggedIn] = useState(true)
   
  const toggle = ()=>{
    setIsLoggedIn(!isloggedIn)
  }
  return (

    <div>

      {
        isloggedIn ?<Login clickFunc={toggle}/>:  <Signup clickFunc={toggle}/>
      }

         <Button variant="primary">Primary</Button>
         <AiFillBell />
    </div>
  );
};

export default App;
