import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const WeatherWidget = ({ city, temp }) => (
  <div className="weatherwidget">
    <p className="weatherwidget__city">{city}</p>
<p className="weatherwidget__temp">{temp}</p>
  </div>
);


WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
}
export default WeatherWidget;
