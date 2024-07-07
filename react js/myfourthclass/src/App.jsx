import React, { useState } from "react";
import BulbOn from './assets/bulbon.jpg'
import BulbOff from './assets/bulboff.png';
// import "./App.css";
// import listItems from "./list";

const App = () => {

  let [bulbOn,setBulbOn] = useState(true)

  let [isLoggedin,setIsLoggedin] = useState()

  // let [number,setNumber] = useState(0)


      // let [name,func] = useState("true");
      // console.log(name)

      // const update = ()=>{
      //   func("false")
      // }

      // const inc = ()=>{
      //   setNumber(++number)
      // }

      // const dec = ()=>{
      //   setNumber(--number)
      // }

      // const bulbON = ()=>{
      //   setBulbOn(true)
      // }

      // const bulbOFF = ()=>{
      //   setBulbOn(false)
      // }
  return (

    <div>
        <h1>App</h1>
      {
        isLoggedin ?
        <>

        <h1>Welcome User</h1>
        <h1>Dashboard</h1>

        </>
        
        :null
      }


    <button onClick={()=>setIsLoggedin(true)}>Login</button>

    <button onClick={()=>setIsLoggedin(false)}>Logout</button>

      

      {
        bulbOn ?
        
        <img src={BulbOn} width={100} alt="" />
        : 
        <img src={BulbOff} width={80} alt="" />

      }

      <button onClick={bulbON}>ON</button>
      <button onClick={bulbOFF}>OFF</button>


      {/* <h1>{number}</h1>

      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button> */}


      {/* <h1>{name}</h1> */}

      {/* <button onClick={update}>Update</button> */}

      {/* <h1 id="heading">{username}</h1> */}

      {/* <button onClick={update} >Update</button> */}

      {/* <h1>React Rendering List</h1> */}

      {/* {
        listItems ?
      
         listItems.map((e,i)=>{
          console.log(e)
          return (
            <li key={i}>{e.name}</li>
          )

        }):<h1>Data not found</h1>

      } */}


    </div>
  );
};

export default App;
