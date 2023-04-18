import React, { useState } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import { MdLocationCity } from "react-icons/md";
import { TbTemperature } from "react-icons/tb";
import { BiAdjust } from "react-icons/bi";
const Home = () => {
  const apiKey = "9b5ed3bc0dabfcf60789972dd7208e8a";
  const [weatherData, setWeatherdata] = useState([{}]);
  const [city, setCity] = useState("");

  // const getWeather = (event) => {
  //   if (event.key == "Enter") {
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setWeatherdata(data);
  //         setCity("");
  //       });
  //   }
  // };

  const getWeather = async (event) => {
    if (event.key == "Enter") {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
        );
        const data = await response.json();
        setWeatherdata(data);
        setCity("");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="container">
      <h1>
        <TiWeatherCloudy />
        Weather
      </h1>
      <input
        className="input"
        placeholder="Enter City."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />

      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to Weather app! Enter in a city to get the weather of</p>
        </div>
      ) : (
        <div className="weatherdata">
          <p>
            <MdLocationCity />
            {weatherData.name}
          </p>
          <p>
            <TbTemperature />
            {Math.round(weatherData.main.temp)}°F
          </p>
          <p>
            <BiAdjust />
            {weatherData.weather[0].main}
          </p>
        </div>
      )}
      {weatherData.cod === "404" ? <p>City Not found</p> : <></>}
    </div>
  );
};

export default Home;
