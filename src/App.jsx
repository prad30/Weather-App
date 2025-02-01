import React, { useState } from 'react';
import SearchBar from './components/searchBar';
import WeatherData from './components/WeatherData';
import './App.css';

const App = () => {

  const [weatherData, setWeatherData] = useState();

  const weatherDataFetch = async (city) => {
    try {
      const apiKey = '4dc8552fe1c7a93eebcd60e341d08094';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData({
        temperature: Math.floor(data.main.temp)-273,
        city: data.name,
      });
    } catch (error) {
      console.log(error);
      alert("Enter Valid city");
    }
  };

  return (
    <>
      <SearchBar onSearch={weatherDataFetch} />
      <WeatherData weatherData={weatherData} />

    </>
  );
};

export default App;
