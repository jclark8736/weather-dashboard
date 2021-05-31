//openweather api key c72883e6c6cd92c5004094d3728064f1
//URL var url = "http://api.openweathermap.org/data/2.5/forecast?q=newark&units=imperial&appid=c72883e6c6cd92c5004094d3728064f1";

//call for latitute/longitude
//https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}



//http://api.openweathermap.org/data/2.5/forecast?q=newark&appid=c72883e6c6cd92c5004094d3728064f1 5 day forecast syntax
//http://api.openweathermap.org/data/2.5/forecast?q=&units=imperial&appid=c72883e6c6cd92c5004094d3728064f1

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


//UV INDEX CALL https://api.openweathermap.org/data/2.5/onecall?lat=40.7143&lon=-74.006&exclude={part}&appid=c72883e6c6cd92c5004094d3728064f1
var urlThree = "https://api.openweathermap.org/data/2.5/onecall?lat="
var urlFour = "&lon="
var urlFive="&exclude={part}&appid=c72883e6c6cd92c5004094d3728064f1"


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
        //pulling out longitude/latitude values for second query
        var cityLat = forecastRaw.city.coord.lat;
        var cityLon= forecastRaw.city.coord.lon
        console.log(cityLon);
        console.log(cityLat);
        var urlCoord= urlThree + cityLat + urlFour + cityLon + urlFive

        //FUNCTION TO GET UV DATA
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
              
              
              
              var dayOneUv = forecastRawCoord.daily[0].uvi
              var dayTwoUv = forecastRawCoord.daily[1].uvi
              var dayThreeUv = forecastRawCoord.daily[2].uvi
              var dayFourUv = forecastRawCoord.daily[3].uvi
              var dayFiveUv = forecastRawCoord.daily[4].uvi
              var daySixUv = forecastRawCoord.daily[5].uvi
              //renders UV values to page
              $("#uv-1").text("The UV index is :" + dayOneUv)
              $("#uv-2").text("The UV index will be :" + dayTwoUv)
              $("#uv-3").text("The UV index will be :" + dayThreeUv)
              $("#uv-4").text("The UV index will be :" + dayFourUv)
              $("#uv-5").text("The UV index will be :" + dayFiveUv)
              $("#uv-6").text("The UV index will be :" + daySixUv)


              
              


        })






        //day 1
        let dayOneWeather = forecastRaw.list[0].weather[0].main
        let dayOneTemp = forecastRaw.list[0].main.temp
        let dayOneHumid = forecastRaw.list[0].main.humidity
        let dayOneWind =  forecastRaw.list[0].wind.speed
        let dayOneTime = forecastRaw.list[0].dt
        var dayOneDate= moment.unix(dayOneTime).format("MM/DD/YYYY");
        localStorage.setItem(dayOneWeather, dayOneTemp, dayOneHumid, dayOneWind)
        

        



      



        //day 2
        let dayTwoWeather = forecastRaw.list[8].weather[0].main
        let dayTwoTemp = forecastRaw.list[8].main.temp
        let dayTwoHumid = forecastRaw.list[8].main.humidity
        let dayTwoWind =  forecastRaw.list[8].wind.speed
        let dayTwoTime = forecastRaw.list[8].dt
        
        var dayTwoDate= moment.unix(dayTwoTime).format("MM/DD/YYYY");
        
        


        //day 3
        let dayThreeWeather = forecastRaw.list[16].weather[0].main
        let dayThreeTemp = forecastRaw.list[16].main.temp
        let dayThreeHumid = forecastRaw.list[16].main.humidity
        let dayThreeWind =  forecastRaw.list[16].wind.speed
        let dayThreeTime = forecastRaw.list[16].dt
        
        var dayThreeDate= moment.unix(dayThreeTime).format("MM/DD/YYYY");
        

        // day 4
        let dayFourWeather = forecastRaw.list[24].weather[0].main
        let dayFourTemp = forecastRaw.list[24].main.temp
        let dayFourHumid = forecastRaw.list[24].main.humidity
        let dayFourWind =  forecastRaw.list[24].wind.speed
        let dayFourTime = forecastRaw.list[24].dt
        
        var dayFourDate= moment.unix(dayFourTime).format("MM/DD/YYYY");
        console.log (dayFourDate)


        //day five

        let dayFiveWeather = forecastRaw.list[32].weather[0].main
        let dayFiveTemp = forecastRaw.list[32].main.temp
        let dayFiveHumid = forecastRaw.list[32].main.humidity
        let dayFiveWind =  forecastRaw.list[32].wind.speed
        let dayFiveTime = forecastRaw.list[32].dt
       
        var dayFiveDate= moment.unix(dayFiveTime).format("MM/DD/YYYY");
        console.log (dayFiveDate)

        //day 6
        let daySixWeather = forecastRaw.list[39].weather[0].main
        let daySixTemp = forecastRaw.list[39].main.temp
        let daySixHumid = forecastRaw.list[39].main.humidity
        let daySixWind =  forecastRaw.list[39].wind.speed
        let daySixTime = forecastRaw.list[39].dt
        
        var daySixDate= moment.unix(daySixTime).format("MM/DD/YYYY");
        console.log (daySixDate)




        renderResults()


        function renderResults() {
          //day 1
          //The first part of these statements displays the values from the API query. The second part is an if/then statement that displays images based on the text of those queries
          $("#date-1").text(dayOneDate +    "  " + city)
          $("#temp-1").text(dayOneTemp + "F")
          $("#weather-1").text("Weather/Precipitation:   " + dayOneWeather + "   The Humidity is currently :    " + dayOneHumid + "         The wind speed is : " + dayOneWind + "mph")
          console.log(dayOneWeather)
          
          if (dayOneWeather.includes("ain")) {
            console.log("TRUE!")
            $("#icon-1").attr("src", "assets/images/rain.png");
            
          }
          if (dayOneWeather.includes("Cloud")) {
            
            $("#icon-1").attr("src", "assets/images/cloudy.png");
            
          }
          if (dayOneWeather.includes("cloudy")) {
            
            $("#icon-1").attr("src", "assets/images/partlycloudy.png");
            
          }
          if (dayOneWeather.includes("Snow")) {
            
            $("#icon-1").attr("src", "assets/images/snowy.png");
            
          }
          if (dayOneWeather.includes("hunder")) {
            
            $("#icon-1").attr("src", "assets/images/thunderstorm.png");
            
          }
          if (dayOneWeather.includes("Clear")) {
            
            $("#icon-1").attr("src", "assets/images/sunny.png");
            
          }
          if (dayOneWeather.includes("Sun")) {
            
            $("#icon-1").attr("src", "assets/images/sunny.png");
            
          }


            //if (dayOneWeather)
          //day 2
          $("#date-2").text(dayTwoDate +    "  " + city)
          $("#temp-2").text(dayTwoTemp + "F")
          $("#weather-2").text("Weather/Precipitation:   " + dayTwoWeather + "   The Humidity is currently :    " + dayTwoHumid + "         The wind speed is : " + dayTwoWind + "mph")
          if (dayTwoWeather.includes("ain")) {
            
            $("#icon-2").attr("src", "assets/images/rain.png");
            
          }
          if (dayTwoWeather.includes("Cloud")) {
            
            $("#icon-2").attr("src", "assets/images/cloudy.png");
            
          }
          if (dayTwoWeather.includes("cloudy")) {
            
            $("#icon-2").attr("src", "assets/images/partlycloudy.png");
            
          }
          if (dayTwoWeather.includes("Snow")) {
            
            $("#icon-2").attr("src", "assets/images/snowy.png");
            
          }
          if (dayTwoWeather.includes("hunder")) {
           
            $("#icon-2").attr("src", "assets/images/thunderstorm.png");
            
          }
          if (dayTwoWeather.includes("Clear")) {
            
            $("#icon-2").attr("src", "assets/images/sunny.png");
            
          }
          if (dayTwoWeather.includes("Sun")) {
            
            $("#icon-2").attr("src", "assets/images/sunny.png");
            
          }

          //day 3
          $("#date-3").text(dayThreeDate +    "  " + city)
          $("#temp-3").text(dayThreeTemp + "F")
          $("#weather-3").text("Weather/Precipitation:   " + dayThreeWeather + "   The Humidity is currently :    " + dayThreeHumid + "         The wind speed is : " + dayThreeWind + "mph")
          
          if (dayThreeWeather.includes("ain")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/rain.png");
            
          }
          if (dayThreeWeather.includes("Cloud")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/cloudy.png");
            
          }
          if (dayThreeWeather.includes("cloudy")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/partlycloudy.png");
            
          }
          if (dayThreeWeather.includes("Snow")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/snowy.png");
            
          }
          if (dayThreeWeather.includes("hunder")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/thunderstorm.png");
            
          }
          if (dayThreeWeather.includes("Clear")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/sunny.png");
            
          }
          if (dayThreeWeather.includes("Sun")) {
            console.log("TRUE!")
            $("#icon-3").attr("src", "assets/images/sunny.png");
            
          }
        
          


          //day 4
          $("#date-4").text(dayFourDate +    "  " + city)
          $("#temp-4").text(dayFourTemp + "F")
          $("#weather-4").text("Weather/Precipitation:   " + dayFourWeather + "   The Humidity is currently :    " + dayFourHumid + "         The wind speed is : " + dayFourWind + "mph")
          if (dayFourWeather.includes("ain")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/rain.png");
            
          }
          if (dayFourWeather.includes("Cloud")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/cloudy.png");
            
          }
          if (dayFourWeather.includes("cloudy")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/partlycloudy.png");
            
          }
          if (dayFourWeather.includes("Snow")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/snowy.png");
            
          }
          if (dayFourWeather.includes("hunder")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/thunderstorm.png");
            
          }
          if (dayFourWeather.includes("Clear")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/sunny.png");
            
          }
          if (dayFourWeather.includes("Sun")) {
            console.log("TRUE!")
            $("#icon-4").attr("src", "assets/images/sunny.png");
            
          }
        


          //day 5
          $("#date-5").text(dayFiveDate +    "  " + city)
          $("#temp-5").text(dayFiveTemp + "F")
          $("#weather-5").text("Weather/Precipitation :   " + dayFiveWeather + "   The Humidity is currently :    " + dayFiveHumid + "         The wind speed is : " + dayFiveWind + "mph")
          if (dayFiveWeather.includes("ain")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/rain.png");
            
          }
          if (dayFiveWeather.includes("Cloud")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/cloudy.png");
            
          }
          if (dayFiveWeather.includes("cloudy")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/partlycloudy.png");
            
          }
          if (dayFiveWeather.includes("Snow")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/snowy.png");
            
          }
          if (dayFiveWeather.includes("hunder")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/thunderstorm.png");
            
          }
          if (dayFiveWeather.includes("Clear")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/sunny.png");
            
          }
          if (dayFiveWeather.includes("Sun")) {
            console.log("TRUE!")
            $("#icon-5").attr("src", "assets/images/sunny.png");
            
          }
        

          //day 6
          $("#date-6").text(daySixDate +    "  " + city)
          $("#temp-6").text(daySixTemp + "F")
          $("#weather-6").text("Weather/Precipitation:   " + daySixWeather + "   The Humidity is currently :    " + daySixHumid + "         The wind speed is : " + daySixWind + "mph")
          if (daySixWeather.includes("ain")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/rain.png");
            
          }
          if (daySixWeather.includes("Cloud")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/cloudy.png");
            
          }
          if (daySixWeather.includes("cloudy")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/partlycloudy.png");
            
          }
          if (daySixWeather.includes("Snow")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/snowy.png");
            
          }
          if (daySixWeather.includes("hunder")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/thunderstorm.png");
            
          }
          if (daySixWeather.includes("Clear")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/sunny.png");
            
          }
          if (daySixWeather.includes("Sun")) {
            console.log("TRUE!")
            $("#icon-6").attr("src", "assets/images/sunny.png");
            
          }
        

        } 


      });
    };
    


