import express from "express";
import mongoose from "mongoose";
import postModel from "./models/postSchema.js";
const app = express();
const PORT = 8080;
const DBURI = "mongodb+srv://admin:admin@cluster0.rnpcr.mongodb.net/";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
app.put("/updatepost", () => {});

// post delete
app.delete("/deletepost", () => {});

app.listen(PORT, () => {
  console.log(`server is running on http:localhost:${PORT}`);
});
