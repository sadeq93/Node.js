/**
 * 3: Party time
 *
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 *
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
const express = require("express");
const app = express();
const fetch = require("node-fetch");

function makeReservation() {
  app.post("/", (req, res) => {
    reserveSeats(res);
  });
  app.listen(3003);

  async function reserveSeats(res) {
    try {
      const body = {
        name: "John Doe",
        numberOfPeople: 3,
      };
      const response = await fetch(
        "https://reservation100-sandbox.mxapps.io/api/reservations",
        {
          method: "post",
          body: JSON.stringify(body),
          headers: { "Content-Type": "application/json" },
        }
      );
      const message = response.json();
      console.log(await message);
      res.status(201).send("reservation sent");
    } catch (err) {
      console.error(err);
    }
  }
}

makeReservation();
