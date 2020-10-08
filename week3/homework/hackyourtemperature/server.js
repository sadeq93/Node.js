const http = require("http");
const WeatherApp = require("./WeatherApp");

const WeatherApp_port = process.env.PORT || 4004;
const WeatherApp_server = http.createServer(WeatherApp);

WeatherApp_server.listen(WeatherApp_port);