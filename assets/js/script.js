//openweather api key c72883e6c6cd92c5004094d3728064f1

//call for latitute/longitude
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


var currentTime = moment().format("MM D YYYY hh:mm");

var forecastData = {}


//grab 5 day forecast

function getForecast() {
    var url = "https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=c72883e6c6cd92c5004094d3728064f1";
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
      });
    };
    