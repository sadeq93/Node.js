const express = require('express')
const app = express();
const fs = require("fs");
const { type } = require('os');
const { title, send } = require('process');
app.use(express.json())

// YOUR CODE GOES IN HERE

app.post  (  '/blogs'          , (req,res) => createBlog (req,res))
app.put   (  '/posts/:title'   , (req,res) => updatePost (req,res))
app.delete(  '/posts/:title'   , (req,res) => deleteBlog (req,res))
app.get   (  '/blogs/:title'   , (req,res) => readBlog   (req,res))

function createBlog (req,res) {
  const title   = req.body.title
  const content = req.body.content
  fs.writeFileSync(title, content);
  res.send('post created')
}
function updatePost(req,res){
  if (fs.existsSync(req.params.title)) {
  const title   = req.body.title
  const content = req.body.content
    fs.writeFileSync(title, content)
    res.send('post updated')
       }
       else {
         res.send('This post does not exist!')
       }
}

function deleteBlog (req,res) {
 if (fs.existsSync(req.params.title)) {
    fs.unlinkSync(req.params.title)
    res.send('post deleted')
       }
       else {
         res.send('This post does not exist!')
       }
 }
function readBlog (req,res) {

  if (fs.existsSync(req.params.title)) {
   const content =  fs.readFileSync(req.params.title,'utf8')
    res.send(content)
    
      }
      else {
        res.send('This post does not exist!')
      }
    
}




 
app.listen(4004)