const express = require("express");
const app = express();
const fs = require("fs");
const { type } = require("os");
const { title, send } = require("process");
app.use(express.json());

// YOUR CODE GOES IN HERE

app.post("/blogs", (req, res) => createBlog(req, res));
app.put("/posts/:title", (req, res) => updatePost(req, res));
app.delete("/posts/:title", (req, res) => deleteBlog(req, res));
app.get("/blogs/:title", (req, res) => readBlog(req, res));

function createBlog(req, res) {
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.status(201).send("Created");
}
function updatePost(req, res) {
  checkExistFile(res, req.params.title);
  const title = req.body.title;
  const content = req.body.content;
  fs.writeFileSync(title, content);
  res.status(201).send("post updated");
}

function deleteBlog(req, res) {
  checkExistFile(res, req.params.title);
  fs.unlinkSync(req.params.title);
  res.send("post deleted");
}
function readBlog(req, res) {
  checkExistFile(res, req.params.title);
  const content = fs.readFileSync(req.params.title, "utf8");
  res.status(200).send(content);
}

function checkExistFile(res, reqParameter) {
  if (!fs.existsSync(reqParameter)) {
    return res.status(204).send("No Content");
  }
}
app.listen(4004);
