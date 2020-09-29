/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const path = require('path')
const fs = require('fs')
// 
const filePath = path.join(__dirname,'index.html',)
// 
//create a server
let server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if(req.url === '/')
  fs.readFile(filePath,(err,content)=>{
	res.writeHead(200,{'content-type':'text/html'})
	res.write(content); // Sends a response back to the client

  })
  if(req.url === '/index.js')
  fs.readFile(path.join(__dirname,'/index.js',),(err)=>{
  res.writeHead(200)
  res.writeHead(200,{'Content-Type': 'application/json'})
	res.end(); // Ends the response
  })
})



server.listen(3300); // The server starts to listen on port 3000
