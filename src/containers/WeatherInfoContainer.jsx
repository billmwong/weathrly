import { connect } from 'react-redux';

import WeatherInfo from '../components/WeatherInfo';

const mapStateToProps = state => ({
  weatherData: state.weatherData,
});

export default connect(mapStateToProps)(WeatherInfo);
