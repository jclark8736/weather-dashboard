//openweather api key c72883e6c6cd92c5004094d3728064f1

//call for latitute/longitude
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



//http://api.openweathermap.org/data/2.5/forecast?q=newark&appid=c72883e6c6cd92c5004094d3728064f1 5 day forecast syntax


var currentTime = moment().format("MM D YYYY hh:mm");

var forecastData = {};
var forecastRaw;
var forecastData5 = {};
let test;
//
// var cityLat = forecastRaw.city.coord.lat;
// var cityLong= forecastRaw.city.coord.long





//parse locations

// WEATHER : console.log(forecastRaw.list[2].weather[0].main)
//TEMPERATURE: console.log(forecastRaw.list[2].main.temp)
//HUMIDITY : console.log(forecastRaw.list[2].main.humidity)
//WIND SPEED : console.log(forecastRaw.list[2].wind.speed)
//UV INDEX
//TIME/DAY: console.log(forecastRaw.list[39].dt




//grab 5 day forecast








function getForecast() {
    var url = "http://api.openweathermap.org/data/2.5/forecast?q=newark&units=imperial&appid=c72883e6c6cd92c5004094d3728064f1";
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw response.json();
        }
        return response.json();
      })
      .then(function (locRes) {
        forecastData = JSON.stringify(locRes);
        forecastParsed = JSON.parse(forecastData);
        console.log(locRes)
        console.log(locRes)
        forecastRaw = locRes;
        let test = Object.assign({}, forecastRaw.list[0],  forecastRaw.list[8],  forecastRaw.list[16])


      });
    };
    