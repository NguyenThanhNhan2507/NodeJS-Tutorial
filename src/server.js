import express from "express";
import viewEngine from "./configs/viewEngine";
const app = express();
const post = 4000;

viewEngine(app);

// app.get("/", (req, res) => {
//   res.send("hello world");
// });

app.get("/", (req, res) => {
  res.render("test/index.ejs");
});

app.listen(post, () => {
  console.log(`Connect server successfully at: http://localhost:${post}`);
});
