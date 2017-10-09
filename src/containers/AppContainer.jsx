import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  location: state.location,
});

export default connect(mapStateToProps)(App);
