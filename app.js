const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;
const ejs = require("ejs");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(_dirname,"public")));

app.set("view engine", "ejs");

const homeRouter = require("./routes/home");
app.get("/", homeRouter);

const postRouter = require("./routes/post");
app.use("/post", postRouter);

app.use((req, res, next) => {
  const { data } = err;
  console.log(data);
  alert(data.msg); 
  res.status(400).json({
    msg: "All fields must be filled, please check again.",
  });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/blogsite")
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:` + PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
