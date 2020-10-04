const http = require('http');
const fs   = require('fs'); 
//create a server
const server = http.createServer(function (req, res) {
  // YOUR CODE GOES IN HERE
  if          (req.url === '/'){
  const data =  fs  .readFileSync ('index.html');
                res .writeHead    (200, {'Content-Type': 'text/html'});
                res .write        (data); // Sends a response back to the client
  } else if   (req.url === '/index.js'){
  const data =  fs  .readFileSync ('index.js');
                res .writeHead    (200, {'Content-Type': 'application/json'});
                res .write        (data);
  }else if    (req.url === '/style.css'){
  const data =  fs  .readFileSync ('style.css');
                res .writeHead    (200, {'Content-Type': 'text/css'});
                res .write        (data);
  }else {
	  res.writeHead (404, {'Content-Type': 'text/plain'});
	  res.write     ('NOT FOUND !!');
  }
	res.end(); // Ends the response
});

server.listen(3000); // The server starts to listen on port 3000


