import { combineReducers } from 'redux';

const location = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.location;
    default:
      return state;
  }
};

const conditions = (state = null, action) => {
  switch (action.type) {
    case 'RECEIVE_CONDITIONS':
      return action.data;
    default:
      return state;
  }
};

const forecast = (state = null, action) => {
  switch (action.type) {
    case 'RECEIVE_FORECAST':
      return action.data;
    default:
      return state;
  }
};

const weatherData = combineReducers({
  conditions,
  forecast,
});

const rootReducer = combineReducers({
  location,
  weatherData,
});

export default rootReducer;
