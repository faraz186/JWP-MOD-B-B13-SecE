import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  setDoc,
  doc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { database } from "../config/firebase";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const addData = async () => {
    try {
      console.log(name, email, password);

      let userObj = {
        name,
        email,
        password,
      };

      const postData = await addDoc(collection(database, "users"), userObj);

      console.log("postData", postData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getData();
  }, [refresh]);

  //   Data get from firebase Firestore Database

  const getData = async () => {
    try {
      const arr = [];
      const getData = await getDocs(collection(database, "users"));

      getData.forEach((doc) => {
        arr.push({ ...doc.data(), id: doc.id });
      });

      setUserData(arr);
    } catch (error) {
      console.log(error);
    }
  };

  //   Data update from firebase Firestore Database

  const EditData = async (id) => {
    console.log("id", id);

    let updateVal = prompt("Enter edit value");

    let updateObj = {
      name: updateVal,
    };

    const updateData = await updateDoc(doc(database, "users", id), updateObj);

    console.log("updateData", updateData);
    setRefresh(!refresh);
  };

  //  Single Data delete from firebase Firestore Database

  const DeleteData = async (id) => {
    const deleteUser = await deleteDoc(doc(database, "users", id));

    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Dashboard Page</h1>

      <input
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Enter Name"
      />
      <br />
      <br />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter email"
      />
      <br />
      <br />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Enter password"
      />
      <br />
      <br />

      <button onClick={addData} variant="contained">
        Add data
      </button>

      {userData.map((e, i) => {
        return (
          <h2 key={i}>
            {e.name}
            <button onClick={() => EditData(e.id)}>Edit</button>
            <button onClick={() => DeleteData(e.id)}>Delete</button>
          </h2>
        );
      })}
    </div>
  );
};

export default Dashboard;
