import React from "react";
import { addCounter, minusCounter } from "../store/slices/counterSlice";
import { useDispatch } from "react-redux";

const Button = () => {
  const dispatch = useDispatch();

  const handleAction = () => {
    dispatch(addCounter());
  };

  const handleAction2 = () => {
    dispatch(minusCounter());
  };
  return (
    <div>
      <button onClick={handleAction}>Add</button>

      <button onClick={handleAction2}>Del</button>
    </div>
  );
};

export default Button;
