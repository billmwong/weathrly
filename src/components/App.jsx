import PropTypes from 'prop-types';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>this is the app component</p>
      </div>
    );
  }
}

App.propTypes = {
  location: PropTypes.string.isRequired,
};

export default App;
