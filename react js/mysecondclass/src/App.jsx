import React from "react";
import './App.css'
import { Button } from "./Button/Button";
import Card from "./Card/Card";
     
const App = ()=>{

  let username = "faraz";
   

  return(
    <>

    <h1 style={{color:"red",backgroundColor:"black"}}>Hello {username}</h1>

    <h1 id="heading">Hello {username}</h1>
    <p>Lorem ipsum dolor sit amet.</p>

    <Button />

    <Card title="Card title 1" description="this is a card 1 info.."/>
    <Card title="Card title 2" description="this is a card 2 info.."/>
    <Card title="Card title 3" description="this is a card 3 info.."/>


     <Button text="login"/>
     <Button text="Signup"/>
     <Button text="Logout"/>


    </>
  )
}

export default App


// There are 3 ways to get style on jsx elements

// 1) Inline CSS
// 2) Module CSS
// 2) External CSS
