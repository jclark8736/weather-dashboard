# weather-dashboard
This program functions by making an API call to the OpenWeather API.

# Usage
To run this application, simply type in the name of a city within the US. Errors in spelling will cause the query to fail.

# Design
This program works by using two different API calls, to the Openweather API. First, it makes a call based upon city name, and returns
temperature, weather conditions, humidity, windspeed, city latitude and longitude, as well as the time in unix format.
Next, another API call is made, incorporating the latitude and longitude returned on the first call, in order to pull the UV index from the database.
After this has been returned, all elements are rendered onto the page, and the unix time is converted to human readable time by moments.js.

## Applications used
This program relies on moments.js, the OpenWeather API, jquery, javascript, HTML, and CSS to function properly.

