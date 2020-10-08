class Weather {
  constructor(cityName){
    this.cityName = cityName ;
    this.errors = []
  }
  validateUserInput () {
    if (this.cityName == ""){
      this.errors.push("Please enter the name of the city")
    }
    // else if(this.cityName.length < 2){
    //   this.errors.push("Please write a valid city name")
    // }
  }
}
module.exports = Weather ;