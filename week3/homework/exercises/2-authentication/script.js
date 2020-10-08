
/**
 * 2. Authentication
 * 
 * Using node-fetch make an authenticated request to https://restapiabasicauthe-sandbox.mxapps.io/api/books
 * Print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - for basic authentication the username and password need to be base64 encoded
 */

const express = require("express");
const app     = express();
const axios = require('axios');
const token = 'YWRtaW46aHZnWDhLbFZFYQ';
function printBooks() {
  // YOUR CODE GOES IN HERE
  app.get('/',(req,res) => {
    fetchBooks(res);
  })
  app.listen(3003);
}

async function fetchBooks(res) {
  try{
    const response = await axios.get('https://restapiabasicauthe-sandbox.mxapps.io/api/books',{
      headers: { 'Authorization': `Basic ${token}`}
    });
    const Books = response.data
    res.send(Books);
    console.log(Books);
  }catch(err){
    console.error(err);
  }
}

printBooks();