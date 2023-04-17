import express from "express";
import viewEngine from "./configs/viewEngine";
require("dotenv").config();

const app = express();
const post = process.env.PORT || 5000;

viewEngine(app);

// render view engine
app.get("/", (req, res) => {
  res.render("test/index.ejs");
});

app.listen(post, () => {
  console.log(`Connect server successfully at: http://localhost:${post}`);
});
