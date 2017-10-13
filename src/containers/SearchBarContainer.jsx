import { connect } from 'react-redux';

import { getWeatherFromLocation, updateLocation } from '../actions/actions';
import SearchBar from '../components/SearchBar';

const mapStateToProps = state => ({
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  onLocationSubmit: () => {
    dispatch(getWeatherFromLocation());
  },
  updateLocation: location => {
    dispatch(updateLocation(location));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
