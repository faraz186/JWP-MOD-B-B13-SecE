import express from "express";
import { data } from "./data.js";
import chalk from "chalk";
import mongoose from "mongoose";  
const app = express();
const PORT = 5000;  

// MiddleWares

app.use(express.json());
app.use(express.urlencoded({ extended: true }));   

// mongodb configuration

const DBURI = "mongodb+srv://admin:admin@cluster0.8t9bn.mongodb.net/";

mongoose.connect(DBURI);

mongoose.connection.on("connected", () => console.log("MongoDB Connected"));

mongoose.connection.on("error", (err) => console.log("MongoDB Error", err));



app.get("/", (req, res) => {
  res.send("server start");
});

// All products

app.get("/products", (req, res) => {
  res.send(data);
});


// Single Product get method

app.get("/products/:id", (req, res) => {
  const singleProId = req.params.id;

  const filterData = data.filter((e, i) => e.id == singleProId);

  res.send(filterData);
});


// All in One APi

app.get("/products", (req, res) => {
  console.log(req.query.id);

  if (req.query.id) {
    const filterData = data.filter((e, i) => e.id == req.query.id);

    res.send(filterData);
    return;
  }

  res.send(data);
});

// Api MEthods

// Create  ---> post
// Read   ----> get
// update ----> put
// delete ----> delete

// post Api's

app.get("/api/post", (req, res) => {
  res.send("get post");
});

app.post("/api/post", (req, res) => {
  console.log(req.body);

  res.send("create post");
});

app.put("/api/post", (req, res) => {
  res.send("update post");
});

app.delete("/api/post", (req, res) => {
  res.send("delete post");
});

app.listen(PORT, () => {
  console.log(
    chalk.red.bgBlack.bold.underline(
      `server is running on http:localhost:${PORT}`
    )
  );
});
