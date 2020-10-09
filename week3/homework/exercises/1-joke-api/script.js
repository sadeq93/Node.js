/**
 * 1. Chuck Norris programs do not accept input
 *
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/
 * (use `node-fetch`) and print it to the console.
 * Make use of `async/await` and `try/catch`
 *
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */
const express = require("express");
const app = express();
const axios = require("axios");

function printChuckNorrisJoke() {
  app.get("/", (req, res) => {
    fetchJoke(res);
  });
  app.listen(3002);
}

async function fetchJoke(res) {
  try {
    const response = await axios.get("http://api.icndb.com/jokes/random");
    const joke = response.data.value.joke;
    res.status(200).send(joke);
    console.log(response);
  } catch (err) {
    console.error(err);
  }
}
printChuckNorrisJoke();
