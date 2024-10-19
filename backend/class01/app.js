import express from "express";
import { data } from "./data.js";  
const app = express();

// PORT

app.get("/products", (request, response) => {
  response.send(data);
});

app.get("/users", (request, response) => {
  response.send({
    name: "faraz",
    email: "faraz@gmail.com",
    phone: "1111136111",
  });  
});

app.get("/foods", (request, response) => {
  response.send("foods data");
});

app.get("/client", (request, response) => {
  response.send("client data");
});

app.get("/", (request, response) => {
  response.send("server running on /");
});

app.listen(5000, () => {
  console.log("SERVER RUNNING..");
});
