



var currentTime = moment().format("MM D YYYY hh:mm");



var cityEl = document.getElementById("search-text")
var forecastData = {};
var forecastRaw;
var forecastData5 = {};
let test;
var buttonEl = document.getElementById("submit-btn");
var dateString

//This button is connected to the search text input and runs the function to get data from the API
$("#submit-btn").on("click", function() {
  city=cityEl.value
  console.log(city)
  getForecast()
}
);

//
// var cityLat = forecastRaw.city.coord.lat;
// var cityLong= forecastRaw.city.coord.long



var urlOne = "http://api.openweathermap.org/data/2.5/forecast?q="
var urlTwo = "&units=imperial&appid=c72883e6c6cd92c5004094d3728064f1";
var city = "New York"

//UV INDEX CALL https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&exclude={part}&appid=c72883e6c6cd92c5004094d3728064f1

var urlThree= "https://api.openweathermap.org/data/2.5/onecall?";
var urlFour ="lat=40.7143&lon=-74.006&exclude={part}&appid=c72883e6c6cd92c5004094d3728064f1"
var urlCoord = urlThree + urlFour;



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
         var cityLat = forecastRaw.city.coord.lat;
        var cityLon= forecastRaw.city.coord.lon
        console.log(cityLat)
        console.log(cityLon)
        fetch(urlCoord)
        .then(function(response){
            if (!response.ok) {
                throw response.json();
              }
              return response.json();
            })
            .then(function (locResCoord) {
              forecastDataCoord = JSON.stringify(locResCoord);
              console.log(locResCoord)
              forecastRawCoord = locResCoord
              console.log("TEST123!!")
              console.log(forecastRawCoord)

        })
      }
      
      )}

      function getForecastCoord() {
        var urlCoord = urlThree + urlFour;
        fetch(url)
          .then(function (response) {
            if (!response.ok) {
              throw response.json();
            }
            return response.json();
          })
          .then(function (locResCoord) {
            forecastDataCoord = JSON.stringify(locResCoord);
            console.log(locResCoord)
            forecastRawCoord = locResCoord;
          }
          )}
        
        //day 1
        // let dayOneWeather = forecastRaw.list[0].weather[0].main
        // let dayOneTemp = forecastRaw.list[0].main.temp
        // let dayOneHumid = forecastRaw.list[0].main.humidity
        // let dayOneWind =  forecastRaw.list[0].wind.speed
        // let dayOneTime = forecastRaw.list[0].dt
        // var dayOneDate= moment.unix(dayOneTime).format("MM/DD/YYYY");
        // console.log (dayOneDate)



      



        // //day 2
        // let dayTwoWeather = forecastRaw.list[8].weather[0].main
        // let dayTwoTemp = forecastRaw.list[8].main.temp
        // let dayTwoHumid = forecastRaw.list[8].main.humidity
        // let dayTwoWind =  forecastRaw.list[8].wind.speed
        // let dayTwoTime = forecastRaw.list[8].dt
        
        // var dayTwoDate= moment.unix(dayTwoTime).format("MM/DD/YYYY");
        // console.log (dayTwoDate)


        // //day 3
        // let dayThreeWeather = forecastRaw.list[16].weather[0].main
        // let dayThreeTemp = forecastRaw.list[16].main.temp
        // let dayThreeHumid = forecastRaw.list[16].main.humidity
        // let dayThreeWind =  forecastRaw.list[16].wind.speed
        // let dayThreeTime = forecastRaw.list[16].dt
        
        // var dayThreeDate= moment.unix(dayThreeTime).format("MM/DD/YYYY");
        // console.log (dayThreeDate)

        // // day 4
        // let dayFourWeather = forecastRaw.list[24].weather[0].main
        // let dayFourTemp = forecastRaw.list[24].main.temp
        // let dayFourHumid = forecastRaw.list[24].main.humidity
        // let dayFourWind =  forecastRaw.list[24].wind.speed
        // let dayFourTime = forecastRaw.list[24].dt
        
        // var dayFourDate= moment.unix(dayFourTime).format("MM/DD/YYYY");
        // console.log (dayFourDate)


        // //day five

        // let dayFiveWeather = forecastRaw.list[32].weather[0].main
        // let dayFiveTemp = forecastRaw.list[32].main.temp
        // let dayFiveHumid = forecastRaw.list[32].main.humidity
        // let dayFiveWind =  forecastRaw.list[32].wind.speed
        // let dayFiveTime = forecastRaw.list[32].dt
       
        // var dayFiveDate= moment.unix(dayFiveTime).format("MM/DD/YYYY");
        // console.log (dayFiveDate)

        // //day 6
        // let daySixWeather = forecastRaw.list[39].weather[0].main
        // let daySixTemp = forecastRaw.list[39].main.temp
        // let daySixHumid = forecastRaw.list[39].main.humidity
        // let daySixWind =  forecastRaw.list[39].wind.speed
        // let daySixTime = forecastRaw.list[39].dt
        
        // var daySixDate= moment.unix(daySixTime).format("MM/DD/YYYY");
        // console.log (daySixDate)
      
