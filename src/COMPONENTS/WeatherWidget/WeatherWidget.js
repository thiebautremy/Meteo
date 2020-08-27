import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './style.css';

const WeatherWidget = () => {
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState('');
  const [coord, setCoord] = useState(0);
  const [weather, setWeather] = useState('');

  useEffect(() => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Nancy&appid=85ef1dac9edc767bf13d9f4107e54684&units=metric')
    .then((res)=>{
      console.log(res.data);
      setTemp(Math.round(res.data.main.temp))
      setCity(res.data.name);
      setCoord(res.data.coord);
      setWeather(res.data.weather[0].main);
    })
    .catch((error) => console.log(error))
  }, []);
  return(
  <div className="weatherwidget">
    <p className="weatherwidget__city">{city}</p>
    <p className="weatherwidget__coord">Lat : {coord.lat}</p>
    <p className="weatherwidget__coord">Lon : {coord.lon}</p>
    <p className="weatherwidget__weather">{weather}</p>
    <p className="weatherwidget__temp">{temp} ° C</p>
  </div>
);
};


WeatherWidget.propTypes = {
  city: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  coord: PropTypes.number.isRequired,
  weather: PropTypes.string.isRequired,
};

export default WeatherWidget;
