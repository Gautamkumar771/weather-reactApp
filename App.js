

import React, { useState, useEffect } from 'react';
import RealTimeWeather from './RealTimeWeather';

const API_KEY = 'RzLl6VdUjoGOFo3lznE5dTWXOJPdwgF4';
const API_URL = `https://api.tomorrow.io/v4/timelines?location=${encodeURIComponent('chennai')}&fields=temperature&units=metric&timesteps=current&apikey=${API_KEY}`;

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
      {weatherData && (
        <RealTimeWeather
          temperature={weatherData?.data?.timelines[0]?.intervals[0]?.values?.temperature}
          description={weatherData?.data?.timelines[0]?.intervals[0]?.values?.temperature}
        />
      )}
    </div>
  );
};

export default App;
