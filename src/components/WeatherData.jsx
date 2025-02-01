import React from 'react';
import cloudyIcon from '../assets/cloudy.png';

const WeatherData = ({ weatherData }) => {
  return (
    <>
      {weatherData ? (
        <div className="weather-data">
          <img src={cloudyIcon} alt="Weather" />
          <p className="temperature">{weatherData.temperature}°C</p>
          <p className="city">{weatherData.city}</p>
        </div>
      ) :
        <><p className='message'>`Enter City And Click Search Icon ${}` </p></>
      }
    </>
  );
};

export default WeatherData;
