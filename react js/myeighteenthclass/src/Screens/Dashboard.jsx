import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const getDataFromStorage = localStorage.getItem("userData");

  const data = JSON.parse(getDataFromStorage);

  console.log(data);

  const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard Page</h1>

      <img src={data.image} width={250} alt="" />
      <h2>{data.firstname}</h2>
      <h2>{data.lastname}</h2>
      <h2>{data.email}</h2>

      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
