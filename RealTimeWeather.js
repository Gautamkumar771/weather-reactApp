

import React from 'react';

const RealTimeWeather = ({ temperature, description }) => {
  return (
    <div>
      <h2>Real-Time Weather</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Description: {description}</p>
      {/* i can add more weather information as needed */}
    </div>
  );
};

export default RealTimeWeather;
