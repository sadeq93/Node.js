// let weatherData ;
const axios = require("axios");
const weather_API_key = require("../sources/keys.json")[0].open_weather_API_key;

exports.getHomePage = (req, res) => {
  res.status(200).render("home", {
    pageTitle: "Hack Your Temperature",
    pageStyle: "css/home.css",
  });
};
const Weather = require("../models/Weather");
exports.getWeatherData = (req, res) => {
  const city = req.body.cityName;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_API_key}&units=metric`;
  const weather = new Weather(city);
  weather.validateUserInput();

  if (weather.errors.length) {
    res.status(201).render("home", {
      pageTitle: "Hack Your Temperature",
      pageStyle: "css/home.css",
      error: weather.errors.toString(),
    });
  } else {
    axios
      .get(url)
      .then((response) => {
        const data = response.data;
        console.log(data.main.temp);
        console.log(city);
        res.status(201).render("home", {
          pageTitle: "Hack Your Temperature",
          pageStyle: "css/home.css",
          result: `the temperature is ${data.main.temp} in ${city}`,
        });
      })
      .catch((err) => {
        res.status(201).render("home", {
          pageTitle: "Hack Your Temperature",
          pageStyle: "css/home.css",
          error: "city not found , Please write a valid city name",
        });
        console.error(err);
      });
  }
};
