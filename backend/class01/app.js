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
    phone: "031464464351",  
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

// create Server using express

app.listen(5000, () => {
  console.log("SERVER RUNNING..");
});
