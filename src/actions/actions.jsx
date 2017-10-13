import $ from 'jquery';

import WU_API_KEY from '../apiKeys';

const BASE_URL = `http://api.wunderground.com/api/${WU_API_KEY}`;

export const updateLocation = location => ({
  type: 'UPDATE_LOCATION',
  location,
});

export const receiveConditions = data => ({
  type: 'RECEIVE_CONDITIONS',
  data,
});

export const receiveForecast = data => ({
  type: 'RECEIVE_FORECAST',
  data,
});

const requestWeatherAPIConditions = location => (
  dispatch => {
    $.get(`${BASE_URL}/conditions/q/${location}.json`)
      .done(response => {
        if (response.response.results) {
          // No exact location found, so retry with first location match
          const firstLocationUrl = response.response.results[0].l.substring(3);
          dispatch(requestWeatherAPIConditions(firstLocationUrl));
        } else if (!response.response.error) {
          dispatch(receiveConditions(response.current_observation));
        }
      })
      .fail((err, status) => console.error(err, status));
  }
);

const requestWeatherAPIForecast = location => (
  dispatch => {
    $.get(`${BASE_URL}/forecast/q/${location}.json`)
      .done(response => {
        if (response.response.results) {
          // No exact location found, so retry with first location match
          const firstLocationUrl = response.response.results[0].l.substring(3);
          dispatch(requestWeatherAPIForecast(firstLocationUrl));
        } else if (!response.response.error) {
          dispatch(receiveForecast(response.forecast));
        }
      })
      .fail((err, status) => console.error(err, status));
  }
);

export const getWeatherFromLocation = () => (
  (dispatch, getState) => {
    const locationString = getState().location;
    if (locationString.length) {
      dispatch(requestWeatherAPIForecast(locationString));
      dispatch(requestWeatherAPIConditions(locationString));
    }
  }
);
