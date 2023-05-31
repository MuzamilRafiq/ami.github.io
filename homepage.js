const searchbar = document.getElementById('search');
const searchbtn = document.getElementById('search-button');
const weather_image = document.querySelector('.weather-img');
const temperatures = document.querySelectorAll('.temp, .temperature');
const city_name = document.querySelector('.city_name');
const description = document.querySelector('.description');
const humidity = document.querySelectorAll('.per, .val');
const wind_speed = document.querySelectorAll('.speed, .speed1');
const feels_like = document.querySelector('.feel_like');
const minimum = document.querySelector('.Min');
const maximum = document.querySelector('.Max');
const pressure = document.querySelector('.Pa');

function checkweather(city) {
  const api_key = "686d8cf3fdf41330086fad36ad0ab3c8";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},AU&appid=${api_key}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(weather_data => {
      console.log(weather_data);
      temperatures.forEach(element => {
        element.innerHTML = Math.round(weather_data.main.temp) + "°C";
      });
      city_name.innerHTML = weather_data.name;
      description.innerHTML = weather_data.weather[0].description;
      humidity.forEach(element => {
        element.innerHTML = weather_data.main.humidity + "%";
      });
      wind_speed.forEach(element => {
        element.innerHTML = weather_data.wind.speed + "Km/H";
      });
      feels_like.innerHTML = Math.round(weather_data.main.feels_like) + "°C";
      pressure.innerHTML = weather_data.main.pressure + "hPa";
      minimum.innerHTML = Math.round(weather_data.main.temp_min) + "°C";
      maximum.innerHTML = Math.round(weather_data.main.temp_max) + "°C";

      switch (weather_data.weather[0].main) {
        case 'Clouds':
          weather_image.src = "images/clouds.jpg";
          break;
        case 'Clear':
          weather_image.src = "images/clear.jpg";
          break;
        case 'Snow':
          weather_image.src = "images/snow.jpg";
          break;
        case 'Rain':
          weather_image.src = "images/rain.jpg";
          break;
        case 'Thunderstorm':
          weather_image.src = "images/thunderstorm.jpg";
          break;
        case 'Mist':
          weather_image.src = "images/mist.jpg";
          break;
      }
    });
}

// Function to retrieve the city name from the query parameter
function getCityNameFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('city');
}

// Retrieve the city name and call the checkweather() function
var cityName = getCityNameFromURL();
if (cityName) {
  checkweather(cityName);
}

searchbtn.addEventListener("click", function () {
  checkweather(searchbar.value);
});

document.getElementById("nsw").addEventListener("click", function() {
  window.location.href = "New_South_Wales/nsw.html";
});

document.getElementById("ql").addEventListener("click", function() {
  window.location.href = "Queensland/ql.html";
});

document.getElementById("sa").addEventListener("click", function() {
  window.location.href = "South_Australia/sa.html";
});

document.getElementById("t").addEventListener("click", function() {
  window.location.href = "Tasmania/t.html";
});

document.getElementById("v").addEventListener("click", function() {
  window.location.href = "Victoria/v.html";
});

document.getElementById("wa").addEventListener("click", function() {
  window.location.href = "Western_Australia/wa.html";
});

