class Weather {
  constructor(cityName) {
    this.cityName = cityName;
    this.errors = [];
  }
  validateUserInput() {
    if (this.cityName == "") {
      this.errors.push("Please enter the name of the city");
    }
  }
}
module.exports = Weather;
