// import React, { useState, useEffect } from "react";

// function Home() {
//   const [weatherData, setWeatherData] = useState(null);
//   const [location, setLocation] = useState("London");
//   const [unit, setUnit] = useState("metric");

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const apiKey = "9b5ed3bc0dabfcf60789972dd7208e8a";
//       const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=${unit}&appid=${apiKey}`;
//       const response = await fetch(apiUrl);
//       const data = await response.json();
//       setWeatherData(data);
//     };
//     fetchWeatherData();
//   }, [location, unit]);

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleUnitChange = (event) => {
//     setUnit(event.target.value);
//   };

//   const renderWeatherData = () => {
//     if (!weatherData) {
//       return <div>Loading...</div>;
//     }

//     const { list } = weatherData;

//     const weatherItems = list.slice(0, 5).map((weather) => {
//       const { dt, weather: weatherInfo, main } = weather;
//       const date = new Date(dt * 1000).toLocaleDateString();
//       const icon = `https://openweathermap.org/img/w/${weatherInfo[0].icon}.png`;
//       const temperature = `${Math.round(main.temp)}°${
//         unit === "metric" ? "C" : "F"
//       }`;
//       const description = weatherInfo[0].description;

//       return (
//         <div className="weather-item" key={dt}>
//           <div>{date}</div>
//           <img src={icon} alt={description} />
//           <div>{temperature}</div>
//           <div>{description}</div>
//         </div>
//       );
//     });

//     return <div className="weather-items">{weatherItems}</div>;
//   };

//   return (
//     <div className="App">
//       <h1>5-Day Weather Forecast</h1>
//       <div className="controls">
//         <label htmlFor="location">Location:</label>
//         <input
//           id="location"
//           type="text"
//           value={location}
//           onChange={handleLocationChange}
//         />
//         <label htmlFor="unit">Unit:</label>
//         <select id="unit" value={unit} onChange={handleUnitChange}>
//           <option value="metric">Celsius</option>
//           <option value="imperial">Fahrenheit</option>
//         </select>
//       </div>
//       {renderWeatherData()}
//     </div>
//   );
// }

// export default Home;
