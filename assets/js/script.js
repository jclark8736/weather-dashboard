//openweather api key c72883e6c6cd92c5004094d3728064f1

//call for latitute/longitude
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



//http://api.openweathermap.org/data/2.5/forecast?q=newark&appid=c72883e6c6cd92c5004094d3728064f1 5 day forecast syntax


var currentTime = moment().format("MM D YYYY hh:mm");

var forecastData = {}
var forecastRaw;
// var cityLat = forecastRaw.city.coord.lat;
// var cityLong= forecastRaw.city.coord.long

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
      });
    };
    