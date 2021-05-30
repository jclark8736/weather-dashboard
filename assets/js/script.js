//openweather api key c72883e6c6cd92c5004094d3728064f1
//URL var url = "http://api.openweathermap.org/data/2.5/forecast?q=newark&units=imperial&appid=c72883e6c6cd92c5004094d3728064f1";

//call for latitute/longitude
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



//http://api.openweathermap.org/data/2.5/forecast?q=newark&appid=c72883e6c6cd92c5004094d3728064f1 5 day forecast syntax


var currentTime = moment().format("MM D YYYY hh:mm");



var cityEl = document.getElementById("search-text")
var forecastData = {};
var forecastRaw;
var forecastData5 = {};
let test;



$("submit-btn").on("click", function() {
  city = cityEl.textContent;
  getForecast()
}
);

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
let dayOneWeather;
let dayOneTemp;
let dayOneHumid;
let dayOneWind;
let dayOneTime;


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


var city;
var urlOne = "http://api.openweathermap.org/data/2.5/forecast?q="
var urlTwo = "&units=imperial&appid=c72883e6c6cd92c5004094d3728064f1";




//grab 5 day forecast


function getForecast() {
    var url = urlOne + city + urlTwo;
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
        let dayOneWeather = forecastRaw.list[0].weather[0].main
        let dayOneTemp = forecastRaw.list[0].main.temp
        let dayOneHumid = forecastRaw.list[0].main.humidity
        let dayOneWind =  forecastRaw.list[0].wind.speed
        let dayOneTime = forecastRaw.list[0].dt
        console.log (dayOneTime)



        //day 2
        let dayTwoWeather = forecastRaw.list[8].weather[0].main
        let dayTwoTemp = forecastRaw.list[8].main.temp
        let dayTwoHumid = forecastRaw.list[8].main.humidity
        let dayTwoWind =  forecastRaw.list[8].wind.speed
        let dayTwoTime = forecastRaw.list[8].dt
        console.log (dayTwoTime)


        //day 3
        let dayThreeWeather = forecastRaw.list[16].weather[0].main
        let dayThreeTemp = forecastRaw.list[16].main.temp
        let dayThreeHumid = forecastRaw.list[16].main.humidity
        let dayThreeWind =  forecastRaw.list[16].wind.speed
        let dayThreeTime = forecastRaw.list[16].dt
        console.log (dayThreeTime)

        // day 4
        let dayFourWeather = forecastRaw.list[24].weather[0].main
        let dayFourTemp = forecastRaw.list[24].main.temp
        let dayFourHumid = forecastRaw.list[24].main.humidity
        let dayFourWind =  forecastRaw.list[24].wind.speed
        let dayFourTime = forecastRaw.list[24].dt
        console.log (dayFourTime)


        //day five

        let dayFiveWeather = forecastRaw.list[32].weather[0].main
        let dayFiveTemp = forecastRaw.list[32].main.temp
        let dayFiveHumid = forecastRaw.list[32].main.humidity
        let dayFiveWind =  forecastRaw.list[32].wind.speed
        let dayFiveTime = forecastRaw.list[32].dt
        console.log (dayFiveTime)



      });
    };
    