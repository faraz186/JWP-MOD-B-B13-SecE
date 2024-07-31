import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { key } = useParams();
  console.log(key);
  return (
    <div>
      <h1>User Page</h1>   
      <h3>Username: {key}</h3>   
    </div>
  );
};

export default User;
