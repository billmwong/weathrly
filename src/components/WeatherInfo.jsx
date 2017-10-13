import PropTypes from 'prop-types';
import React from 'react';

const WeatherInfo = ({ weatherData }) => {
  const { conditions, forecast } = weatherData;
  if (!conditions || !forecast) {
    return null;
  }

  const { simpleforecast, txt_forecast } = forecast;
  const location = conditions.display_location.full;
  const day = txt_forecast.forecastday[0].title;
  const currentCondition = conditions.weather;
  const currentTemp = conditions.temperature_string;
  const high = simpleforecast.forecastday[0].high.fahrenheit;
  const low = simpleforecast.forecastday[0].low.fahrenheit;
  const summary = txt_forecast.forecastday[0].fcttext;

  return (
    <div>
      <h1>{location}</h1>
      <h3>{day}</h3>
      <h3>Currently: {currentCondition}, {currentTemp}</h3>
      <h3>High: {high}F</h3>
      <h3>Low: {low}F</h3>
      <h3>{summary}</h3>
    </div>
  );
};

WeatherInfo.propTypes = {
  weatherData: PropTypes.object.isRequired,
};

export default WeatherInfo;
