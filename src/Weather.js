import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";
export default function Weather() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "ce144f0cf51fa43f03431f0488a36728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." className ="searchInput"  onChange={updateCity} />
      <button type="Submit" className="searchButton">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div className="Weather">
        {form}
       
          <h4>Temperature: {Math.round(weather.temperature)}°C</h4>
          <h4>Description: {weather.description}</h4>
          <h4>Humidity: {weather.humidity}%</h4>
          <h4>Wind: {weather.wind}km/h</h4>
          <h4>
            <img src={weather.icon} alt={weather.description} />
          </h4>
       
      </div>
    );
  } else {
    return form;
  }
}
