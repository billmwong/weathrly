import React from 'react';

import SearchBarContainer from '../containers/SearchBarContainer';
import WeatherInfoContainer from '../containers/WeatherInfoContainer';

const App = () => (
  <div>
    <h1>Weathrly</h1>
    <h2>Welcome! Find the weather anywhere in the world:</h2>
    <SearchBarContainer />
    <WeatherInfoContainer />
  </div>
);

export default App;
