import { combineReducers } from 'redux';

const location = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.data;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  location,
});

export default rootReducer;
