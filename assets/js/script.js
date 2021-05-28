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


//day 1
var dayOneWeather;
var dayOneTemp;
var dayOneHumid;
var dayOneWind;
var dayOneTime;


//day 2
let dayTwoWeather;
let dayTwoTemp;
let dayTwoHumid;
let dayTwoWind;
let dayTwoTime;


//day 3
let dayThreeWeather;
let dayThreeTemp;
let dayThreeHumid;
let dayThreeWind;
let dayThreeTime;



//day 4
let dayFourWeather;
let dayFourTemp;
let dayFourHumid;
let dayFourWind;
let dayFourTime;




//day 5
let dayFiveWeather;
let dayFiveTemp;
let dayFiveHumid;
let dayFiveWind;
let dayFiveTime;







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
        console.log(locRes)
        forecastRaw = locRes;
        //day 1
        var dayOneWeather = forecastRaw.list[0].weather[0].main
        var dayOneTemp = forecastRaw.list[0].main.temp
        var dayOneHumid = forecastRaw.list[0].main.humidity
        var dayOneWind =  forecastRaw.list[0].wind.speed
        var dayOneTime = forecastRaw.list[0].dt
        console.log(dayOneTime)


      });
    };
    