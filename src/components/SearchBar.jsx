import PropTypes from 'prop-types';
import React from 'react';

const SearchBar = ({ location, onLocationSubmit, updateLocation }) => {
  const onFormSubmit = e => {
    e.preventDefault();
    onLocationSubmit();
  };

  return (
    <div>
      <form
        className="form-inline"
        onSubmit={onFormSubmit}
      >
        <div className="form-group">
          <input
            className="form-control"
            onChange={e => updateLocation(e.target.value)}
            placeholder="Zip Code or City"
            type="text"
            value={location}
          />
          <button className="btn" type="submit" value="Get Weather">
            Get Weather
          </button>
        </div>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  location: PropTypes.string.isRequired,
  onLocationSubmit: PropTypes.func.isRequired,
  updateLocation: PropTypes.func.isRequired,
};

export default SearchBar;
