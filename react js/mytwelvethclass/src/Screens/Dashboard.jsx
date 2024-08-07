import React, { useEffect, useState } from "react";

const Dashboard = () => {   
  const [isToogle, setIsToogle] = useState(false);      
  const [count, setCount] = useState(0);

  const func = () => {
    console.log("useEffect call...");
  };

// render all state update
   
//   useEffect(() => {
//     func();
//   });
   
   
// Dependency array in state

useEffect(() => {
    func();   
  },[isToogle]);


  return (
    <div>
      <h1>Dashboard Page</h1>

      {count}
      
      <br />
      <br />

      <button onClick={() => setCount(count + 1)}>Click Count</button>

      <br />
      <br />

      {isToogle ? "true" : "false"}

      <br />
      <br />

      <button onClick={() => setIsToogle(!isToogle)}>Click 1</button>
    </div>
  );
};

export default Dashboard;
