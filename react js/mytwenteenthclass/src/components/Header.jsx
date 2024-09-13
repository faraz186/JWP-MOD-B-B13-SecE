import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer);

  console.log("counter", counter);
  return (
    <div>
      <h1>Counter : {counter}</h1>
    </div>
  );
};

export default Header;
