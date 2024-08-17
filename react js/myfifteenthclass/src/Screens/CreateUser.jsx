import { Button, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [createdata, setCreateData] = useState({
    name: "",
    email: "",
    username: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/users", createdata)
      .then((res) => {
        alert("user create successfully");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Paper elevation={24} sx={{ margin: 20, padding: 5 }}>
        <Typography variant="h4" sx={{ marginBottom: 5 }}>
          Create User
        </Typography>
        <TextField
          onChange={(e) =>
            setCreateData({ ...createdata, name: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Full Name"
        />
        <TextField
          onChange={(e) =>
            setCreateData({ ...createdata, username: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Username"
        />
        <TextField
          onChange={(e) =>
            setCreateData({ ...createdata, email: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Email"
        />
        <TextField
          onChange={(e) =>
            setCreateData({ ...createdata, phone: e.target.value })
          }
          sx={{ mb: 3 }}
          fullWidth
          label="Phone"
        />

        <Button variant="contained" type="submit">
          Create
        </Button>
      </Paper>
    </form>
  );
};

export default CreateUser;
