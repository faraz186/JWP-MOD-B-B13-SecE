import express from "express";
import mongoose from "mongoose";
import postModel from "./models/postSchema.js";
import userModel from "./models/userSchema.js";  
import bcrypt from "bcryptjs";
import cors from "cors";

const app = express();
const PORT = 8080;
const DBURI = "";  
  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
app.use(cors());

mongoose.connect(DBURI);  

mongoose.connection.on("connected", () => console.log("mongodb connected"));

mongoose.connection.on("error", (err) => console.log(err));

app.get("/", (req, res) => {
  res.json({
    message: "server up...",
    status: true,
  });
});

// create post api's

// post create

app.post("/createpost", async (req, res) => {
  const { title, desc, postId } = req.body;

  if (!title || !desc || !postId) {
    res.json({
      message: "required fields are missing",
    });
    return;
  }

  //  data save in DB

  const postObj = {
    title,
    desc,
    postId,
  };

  const response = await postModel.create(postObj);

  res.json({
    message: "post create successfully",
    data: response,
  });

  res.send("create post");
});

// post get
app.get("/getpost", async (req, res) => {
  const getData =
    // await postModel.findByIdAndUpdate({ title: "POST 1" });
    await postModel.find({});

  res.json({
    message: "post data get successful..",
    data: getData,
  });
  res.send("get post");
});

// post update
app.put("/updatepost", async (req, res) => {
  const { title, desc, postId } = req.body;
  console.log(title, desc, postId);

  const updatePost = await postModel.findByIdAndUpdate(postId, { title, desc });

  res.json({
    message: "post has been updated",
    data: updatePost,
  });
});

// post delete

app.delete("/deletepost/:id", async (req, res) => {
  const params = req.params.id;

  await postModel.findByIdAndDelete(params);

  res.json({
    message: "delete post",
  });
});

// ----------------------------------------------------------

// signUp Api

app.post("/api/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  if (!firstName || !lastName || !email || !password) {
    res.json({
      message: "required fields are missing",
      status: false,
    });
    return;
  }

  const emailExist = await userModel.findOne({ email });

  console.log("emailExist", emailExist);

  if (emailExist !== null) {
    res.json({
      message: "email already been registered",
      status: false,
    });

    return;
  }

  const hashPassword = await bcrypt.hash(password, 10);

  console.log("hashPassword", hashPassword);

  let userObj = {
    firstName,
    lastName,
    email,
    password: hashPassword,
  };

  // create user on db

  const createUser = await userModel.create(userObj);

  res.json({
    message: "user create successfully..",
    status: true,
  });

  console.log(body);

  res.send("signup api");
});

// Login Api

app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.json({
      message: "required fields are missing",
      status: false,
    });
    return;
  }

  const emailExist = await userModel.findOne({ email });

  if (!emailExist) {
    res.json({
      message: "Invalid email & password",
      status: false,
    });
    return;
  }

  const comparePassword = await bcrypt.compare(password, emailExist.password);

  if (!comparePassword) {
    res.json({
      message: "Invalid email & password",
      status: false,
    });

    return;
  }

  res.json({
    message: "login successfully",
    status: true,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http:localhost:${PORT}`);
});
